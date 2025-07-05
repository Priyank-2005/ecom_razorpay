'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/orders', label: 'Orders' },
  { href: '/login', label: 'Login' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-700">
          ShopMate
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg ${
                pathname === href
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              {label}
            </Link>
          ))}

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full px-4 py-2 rounded-md ${
                pathname === href
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {label}
            </Link>
          ))}

          <Link href="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-4 py-2">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700">Cart</span>
            {cart.length > 0 && (
              <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
