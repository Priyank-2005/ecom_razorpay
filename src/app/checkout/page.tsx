'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useState } from 'react';

// Razorpay types
interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayResponse) => void;
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    theme: {
        color: string;
    };
}

interface RazorpayInstance {
    open(): void;
}

interface RazorpayConstructor {
    new(options: RazorpayOptions): RazorpayInstance;
}

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handlePlaceOrder = async () => {
        if (cart.length === 0) {
            alert('Cart is empty!');
            return;
        }

        try {
            setLoading(true);
            const totalAmount = cart.reduce((sum, item) => sum + item.price, 0) * 100;

            const res = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const order = await res.json();

            const options: RazorpayOptions = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
                amount: order.amount,
                currency: 'INR',
                name: 'E-Learnify',
                description: 'Course Purchase',
                order_id: order.id,
                handler: function (response: RazorpayResponse) {
                    const query = new URLSearchParams({
                        payment_id: response.razorpay_payment_id,
                        amount: (order.amount / 100).toString(),
                    }).toString();
                    router.push(`/invoice?${query}`);
                },
                prefill: {
                    name: 'Priyank',
                    email: 'student@example.com',
                    contact: '9999999999',
                },
                theme: { color: '#6366F1' },
            };

            const RazorpayConstructor = (window as unknown as { Razorpay: RazorpayConstructor }).Razorpay;

            if (RazorpayConstructor) {
                const rzp = new RazorpayConstructor(options);
                rzp.open();
            } else {
                alert('Payment SDK failed to load. Please refresh and try again.');
            }
        } catch (err) {
            console.error('Order error:', err);
            alert('Failed to create order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
            <main className="min-h-screen p-8 bg-gray-100 flex justify-center">
                <div className="bg-white p-6 rounded shadow w-full max-w-lg">
                    <h2 className="text-gray-800 text-xl font-bold mb-4">Checkout</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        <>
                            <ul className="text-gray-600 mb-4">
                                {cart.map((course, index) => (
                                    <li key={index} className="border-b py-2">
                                        {course.title} - ₹{course.price}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 font-semibold mb-4">
                                Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
                            </p>
                            <button
                                onClick={handlePlaceOrder}
                                disabled={loading}
                                className={`px-4 py-2 rounded text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                {loading ? 'Processing...' : 'Pay Now'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
