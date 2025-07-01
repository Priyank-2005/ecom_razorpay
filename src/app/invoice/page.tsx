'use client';

export const dynamic = 'force-dynamic';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Course {
  title: string;
  price: number;
}

export default function InvoicePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentId = searchParams.get('payment_id');
  const amount = Number(searchParams.get('amount')) / 100;

  const [date, setDate] = useState('');
  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([]);

  useEffect(() => {
    setDate(new Date().toLocaleString());

    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        const parsed = JSON.parse(cartData);
        setPurchasedCourses(parsed);
      } catch (err) {
        console.error('Error parsing cart:', err);
      }
    }

    localStorage.removeItem('cart'); // clear cart after invoice
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
            {purchasedCourses.map((course, index) => (
              <li key={index} className="border-b pb-2">
                {course.title} - ₹{course.price}
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
