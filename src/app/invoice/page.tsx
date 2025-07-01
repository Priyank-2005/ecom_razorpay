'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function InvoicePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { cart } = useCart();

  const paymentId = searchParams.get('payment_id');
  const amount = Number(searchParams.get('amount')) / 100;

  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleString());
    // clear cart for next session
    localStorage.removeItem('cart');
  }, []);

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
          <h2 className="text-gray-600 text-lg font-semibold mb-2">Purchased Courses:</h2>
          <ul className="text-gray-600 space-y-2">
            {cart.map((course, index) => (
              <li key={index} className="text-gray-600 border-b pb-2">
                {course.title} - ₹{course.price}
              </li>
            ))}
          </ul>
        </div>

        <hr className="text-gray-600 my-4" />

        <div className="text-gray-600 text-right font-bold text-lg">
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
