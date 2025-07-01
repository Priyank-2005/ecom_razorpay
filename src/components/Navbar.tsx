'use client';
import { useCart } from '@/context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800">
        E-Learnify
      </Link>

      <div className="flex items-center space-x-6">
        <Link href="/cart" className="relative">
          <FiShoppingCart size={24} className="text-gray-700" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
