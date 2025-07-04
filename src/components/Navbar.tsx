'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/orders', label: 'Orders' },
  { href: '/cart', label: 'Cart' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          ShopMate
        </Link>
        <div className="space-x-4">
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
        </div>
      </div>
    </nav>
  );
}
