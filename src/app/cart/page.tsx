'use client';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) return <div className="p-6 text-center">Your cart is empty.</div>;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-gray-600 text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((course, i) => (
          <div key={i} className="bg-white p-4 rounded shadow flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 font-semibold">{course.title}</h2>
              <p>₹{course.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(course.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-gray-600 mt-6 text-right font-semibold">Total: ₹{total}</div>
      <button
        onClick={() => router.push('/checkout')}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Proceed to Checkout
      </button>
    </main>
  );
}
