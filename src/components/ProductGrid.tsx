'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: '1',
    title: 'Noise 3 Wireless Headphones',
    mrp: 1999,
    price: 1614,
    image: '/product.webp',
    description: 'Up to 70h playtime, Gaming Mode, Dual Pairing, Foldable Design',
  },
  {
    id: '2',
    title: 'Amazon Echo Dot',
    mrp: 4499,
    price: 3999,
    image: '/echo.png',
    description: 'Smart speaker with Alexa (4th Gen)',
  },
  {
    id: '3',
    title: 'Samsung Galaxy Z Fold6 5G Smartphone',
    mrp: 164999,
    price: 149999,
    image: '/phone.png',
    description: 'Galaxy AI (Navy, 12GB RAM, 256GB Storage), 50MP High-Resolution Camera, Snapdragon 8 Gen 3, Google Gemini',
  },
];

export default function ProductGrid() {
  const router = useRouter();

  return (
  <div className="w-full px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() =>
            router.push(
              `/product/${product.id}?title=${encodeURIComponent(
                product.title
              )}&price=${product.price}&mrp=${product.mrp}&desc=${encodeURIComponent(
                product.description
              )}&image=${product.image}`
            )
          }
          className="bg-white w-full h-full min-h-[350px] p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
        >
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-semibold text-gray-800 text-lg">{product.title}</h3>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500 line-through">₹{product.mrp}</p>
            <p className="text-green-600 font-bold text-xl">₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}
