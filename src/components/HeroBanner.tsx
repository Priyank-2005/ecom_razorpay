'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ads = [
  { id: 1, image: '/ad1.png', alt: 'Ad 1' },
  { id: 2, image: '/ad2.png', alt: 'Ad 2' },
  { id: 3, image: '/ad3.png', alt: 'Ad 3' },
  { id: 4, image: '/ad4.png', alt: 'Ad 4' },
  { id: 5, image: '/ad5.png', alt: 'Ad 5' },
];


export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <section className="w-full overflow-hidden bg-white shadow-sm">
    {/* Slider Container with responsive height */}
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      {ads.map((ad, i) => (
        <div
          key={ad.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={ad.image}
            alt={ad.alt}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-3">
      {ads.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full transition ${
            i === current ? 'bg-blue-600 scale-110' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  </section>
);
}