'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // clear cart after success
    localStorage.removeItem('cart'); // or use setCart([])
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2 text-green-700">Payment Successful</h1>
        <p className="mb-4">Thank you for purchasing the course!</p>
        <p className="text-sm text-gray-500 mb-2">
          You will receive a confirmation email shortly.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}
