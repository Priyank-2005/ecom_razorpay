'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const dummyCourses = [
  { id: '1', title: 'Node.js Intro', description: 'Learn Node.js', price: 400, image: 'https://via.placeholder.com/300' },
];

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-gray-800 font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <div key={course.id} className="bg-white p-4 shadow rounded">
            <Image src={course.image} alt="Course" width={400} height={300} className="rounded" />
            <h2 className="text-gray-800 font-bold">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
            <p className="text-gray-600 font-semibold mt-2 mb-3">₹{course.price}</p>
            <button
              onClick={() => addToCart(course)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
