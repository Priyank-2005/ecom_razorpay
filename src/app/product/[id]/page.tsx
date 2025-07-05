'use client';
import React from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

const products = [
  {
    id: '1',
    title: 'Noise Airwave Max 3 Bluetooth On-Ear Headphones',
    price: 1999,
    mrp: 5499,
    rating: 3.9,
    reviews: 2051,
    image: '/product.webp',
    brand: 'Noise',
    color: 'Carbon Black',
    highlights: [
      '70H Playtime',
      '40mm Driver',
      'Low Latency: 45ms',
      'Dual Pairing',
      'Bluetooth v5.3',
      'On-Ear Design',
      'Water Resistant',
      '3.5mm AUX Support',
    ],
    offers: [
      'Up to ₹1,500 discount with HDFC, ICICI cards',
      'No Cost EMI from ₹98/month',
      'Cashback up to ₹59 via Amazon Pay ICICI card',
    ],
    about: [
      'Enjoy music for days without charging with a massive 70-hour battery life.',
      'Dual Pairing feature lets you stay connected to two devices simultaneously.',
      'Gaming Mode with low latency of 45ms ensures lag-free experience.',
      '40mm dynamic drivers deliver rich bass and crisp treble.',
      'Comfortable lightweight build ideal for long listening sessions.',
    ],
    specs: {
      'Brand': 'Noise',
      'Model Name': 'Noise 3',
      'Form Factor': 'On Ear',
      'Connectivity': 'Bluetooth v5.3 & AUX',
      'Driver Size': '40mm',
      'Battery Life': '70 Hours',
      'Charging Time': '1.5 hours',
      'Latency': '45ms',
      'Weight': '50g',
      'Color': 'Carbon Black',
      'Water Resistance': 'Yes',
    },
  },
  {
    id: '2',
    title: 'Amazon Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)',
    price: 1999,
    mrp: 4499,
    rating: 4.4,
    reviews: 310000,
    image: '/echo.png',
    brand: 'Amazon',
    color: 'Black',
    highlights: [
      'Smart voice assistant with Alexa',
      'Rich, loud sound with improved bass',
      'Voice control for music, smart home, and more',
      'Stream songs from Amazon Music, Spotify, JioSaavn, etc.',
      'Compatible with smart lights, plugs, ACs and more',
      'Far-field voice recognition',
    ],
    offers: [
      'Flat ₹2,500 discount on M.R.P.',
      'No Cost EMI available',
      'Free smart bulb with bundle offer (select variants)',
    ],
    about: [
      'Echo Dot is a smart speaker that can be operated by voice – even from a distance.',
      'Alexa can speak English and Hindi.',
      'Use Echo Dot as a Bluetooth speaker by pairing your phone.',
      'Alexa can play music, answer questions, read the news, check the weather, set alarms, control compatible smart home devices and more.',
      'Stream millions of songs from Amazon Prime Music, Spotify, JioSaavn, Gaana, and Apple Music.',
    ],
    specs: {
      'Brand': 'Amazon',
      'Model': 'Echo Dot 3rd Gen',
      'Speaker Size': '1.6”',
      'Microphones': '4 far-field mics',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Voice Assistant': 'Alexa',
      'Audio Output': '3.5mm jack & Bluetooth',
      'Dimensions': '99 x 99 x 43 mm',
      'Weight': '300g',
      'Color': 'Black',
      'Power': '15W power adapter included',
      'Country of Origin': 'China',
    },
  },
  {
  id: '3',
  title: 'Samsung Galaxy Z Fold6 5G (12GB RAM, 512GB Storage) – Phantom Black',
  price: 164999,
  mrp: 179999,
  rating: 4.6,
  reviews: 2150,
  image: 'phone.png',
  brand: 'Samsung',
  color: 'Phantom Black',
  highlights: [
    '7.6” Main QXGA+ Dynamic AMOLED 2X Display',
    '6.3” Cover FHD+ Display',
    'Snapdragon 8 Gen 3 Mobile Platform',
    '12GB RAM + 512GB Internal Storage',
    'Triple Rear Camera: 50MP + 12MP + 10MP',
    '4400mAh Battery with Super Fast Charging',
    'IPX8 Water Resistance',
    'Samsung Knox & S Pen support (sold separately)',
  ],
  offers: [
    '₹15,000 Instant Bank Discount on ICICI/Axis Cards',
    'Free Galaxy Buds3 Pro on Pre-book',
    'Up to ₹12,000 exchange bonus',
  ],
  about: [
    'Redesigned with a slimmer hinge and lighter body for better portability.',
    'Enhanced Flex Mode and multitasking features for power users.',
    'Built with Armor Aluminum frame and Gorilla Glass Victus 2 for protection.',
    '5G capable for ultra-fast speeds and low latency.',
    'Samsung DeX and Knox security for business use.',
  ],
  specs: {
    'Brand': 'Samsung',
    'Model': 'Galaxy Z Fold6',
    'Display (Main)': '7.6" QXGA+ AMOLED 2X, 120Hz',
    'Display (Cover)': '6.3" FHD+ AMOLED, 120Hz',
    'Processor': 'Snapdragon 8 Gen 3',
    'RAM': '12GB',
    'Storage': '512GB',
    'Rear Camera': '50MP + 12MP + 10MP',
    'Front Camera': '10MP + 4MP (under display)',
    'Battery': '4400mAh, 25W Fast Charging',
    'OS': 'Android 14, One UI 7.0',
    'Weight': '239g',
    'Water Resistance': 'IPX8',
    'Color': 'Phantom Black',
  },
  }
];

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const product = products.find((item) => item.id === params.id);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    
    <div className="bg-white mx-auto p-6">
            <Navbar />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl shadow-md w-100"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-gray-800 text-2xl font-bold">{product.title}</h1>
          <p className="text-sm text-gray-600">by {product.brand}</p>
          <div className="flex items-center gap-2 text-yellow-500 font-semibold">
            ★ {product.rating}{' '}
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="text-xl font-bold text-green-600">
            ₹{product.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500 line-through">
            M.R.P: ₹{product.mrp.toLocaleString()}
          </div>
          <div className="text-sm text-blue-600">
            You save ₹{(product.mrp - product.price).toLocaleString()} (
            {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
            off)
          </div>

          <div className="bg-yellow-50 p-4 rounded-md text-sm border">
            <p className="text-gray-700 font-semibold mb-1">Available Offers:</p>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              {product.offers.map((offer, i) => (
                <li key={i}>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => {
                addToCart({ ...product, quantity: 1 });
                router.push('/checkout');
              }}
            >
              Buy Now
            </button>
            <button
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-gray-700 text-xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {product.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-gray-700 text-xl font-semibold mb-2">About this item</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {product.about.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-gray-700 text-xl font-semibold mb-2">Technical Details</h2>
        <table className="w-full text-sm text-left border border-gray-300">
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key} className="even:bg-gray-50">
                <td className="text-gray-600 p-2 font-medium border">{key}</td>
                <td className="text-gray-600 p-2 border">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}