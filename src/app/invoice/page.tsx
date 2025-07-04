'use client';

export const dynamic = 'force-dynamic';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

function InvoiceContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentId = searchParams.get('payment_id');
  const amount = Number(searchParams.get('amount')) / 100;

  const [date, setDate] = useState('');
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setDate(new Date().toLocaleString());

    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        const parsed: Product[] = JSON.parse(cartData);
        setPurchasedProducts(parsed);

        const newOrder = {
          product: parsed.map((p) => `${p.title} x${p.quantity}`).join(', '),
          price: parsed.reduce((sum, item) => sum + item.price * item.quantity, 0),
          date: new Date().toISOString(),
          orderId: paymentId || 'unknown',
        };

        const prevOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        localStorage.setItem('orders', JSON.stringify([...prevOrders, newOrder]));
      } catch (err) {
        console.error('Error parsing cart/orders:', err);
      }
    }

    localStorage.removeItem('cart');
  }, [paymentId]);

  return (
    <main className="min-h-screen flex justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded p-6 max-w-xl w-full">
        <h1 className="text-gray-800 text-2xl font-bold mb-4 text-center">Invoice</h1>

        <div className="text-sm text-gray-600 mb-4">
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Payment ID:</strong> {paymentId}</p>
          <p><strong>Customer:</strong> Priyank (student@example.com)</p>
        </div>

        <hr className="text-gray-600 my-4" />

        <div>
          <h2 className="text-gray-600 text-lg font-semibold mb-2">Purchased Products:</h2>
          <ul className="text-gray-600 space-y-2">
            {purchasedProducts.map((product, index) => (
              <li key={index} className="border-b pb-2">
                {product.title} x{product.quantity} – ₹{product.price * product.quantity}
              </li>
            ))}
          </ul>
        </div>

        <hr className="text-gray-600 my-4" />

        <div className="text-gray-700 text-right font-bold text-lg">
          Total Paid: ₹{amount}
        </div>
        <button onClick={() => window.print()} className="text-sm text-blue-500 underline mt-2">Print Invoice</button>

        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}

export default function InvoicePage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading invoice...</div>}>
      <InvoiceContent />
    </Suspense>
  );
}
