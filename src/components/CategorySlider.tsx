'use client';
import Image from 'next/image';

const categories = [
  { name: 'Electronics', image: '/electronics.png' },
  { name: 'Fashion', image: '/fashion.png' },
  { name: 'Home', image: '/home.png' },
  { name: 'HeadPhones', image: '/headphones.png' },
  { name: 'Sports & Fitness', image: '/sf.png' },
  { name: 'Mobiles', image: '/mobile.png' },
  { name: 'Beauty', image: '/beauty.png' },
  { name: 'Automobile essentials', image: '/ae.png' },
  { name: 'Toys', image: '/toys.png' },
];

export default function CategorySlider() {
  const handleClick = (category: string) => {
    alert(`${category} — Coming soon!`);
  };

  return (
  <div className="w-full px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="bg-white w-full border rounded-xl shadow-md flex flex-col items-center p-4 hover:shadow-lg transition"
        >
          <Image
            width={200}
            height={150}
            src={cat.image}
            alt={cat.name}
            className="w-full max-h-40 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
            {cat.name}
          </h3>
          <button
            onClick={() => handleClick(cat.name)}
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Explore
          </button>
        </div>
      ))}
    </div>
  </div>
);

}
