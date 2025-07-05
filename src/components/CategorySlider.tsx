'use client';

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
    <div className="w-300 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white w-full border rounded-xl shadow-md flex flex-col items-center p-4 hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-304 h-60 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{cat.name}</h3>
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
