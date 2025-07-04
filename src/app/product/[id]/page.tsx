'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const product = {
  id: 'headphones-001',
  title: 'Noise 3 Wireless Headphone',
  rating: 4.3,
  reviewsCount: 80,
  colors: ['Midnight Blue', 'Carbon Black', 'Jet Black', 'Chocolate Brown', 'Dark Brown', 'Space Blue'],
  typicalPrice: '₹1,648–₹1,999',
  bestPrice: '₹1,614',
  discount: '19% off',
  mrp: '₹1,999',
  brand: 'Noise',
  image: '/product.webp',
  description: `Noise Three Wireless Headphones, Up To 70 hours of playtime, Dual Pairing, Gaming Mode, Low Latency (Up to 45ms), Foldable Design, Carbon Black`,
  availability: 'In stock online',
  delivery: 'Free delivery 11–16 Jul',
  offer: 'Rs 385 off on Airwave Max 3',
  shops: [
    {
      name: 'Vijay Sales',
      price: '₹1,799',
      stock: 'In stock online and nearby, 10.9 km',
      delivery: 'Free next-day delivery'
    },
    {
      name: 'Amazon.in',
      price: '₹1,999',
      stock: 'In stock online',
      delivery: 'Free delivery'
    }
  ],
  specs: {
    Mic: 'Yes',
    WirelessType: 'Bluetooth',
    BTVersion: '5.3',
    MaxBatteryLife: '70 Hours',
    Rechargeable: 'Yes',
    DriverSize: '40 mm',
    DriverTech: 'Dynamic',
    Style: 'On-Ear',
    CupType: 'Supra-aural',
    EarcupStyle: 'Closed-back',
    NoiseCanceling: 'No',
    SurroundSound: 'No',
    AssistSupport: 'Yes',
    ChargingCase: 'No',
    WaterProt: 'IPX5',
    OnEar: 'Yes',
    OverEar: 'No',
    InEar: 'No',
    ForGaming: 'Yes',
    RecommendedUse: 'Music listening, Calls, Gaming',
    UseWithPhones: 'Yes',
    OccasionStyle: 'Casual, Travel',
    TypeOfUsers: 'Casual users'
  },
  userReviews: [
    {
      user: 'K.s.',
      rating: 5,
      time: 'a year ago',
      summary: 'Noise 3',
      content: `Sound is fantastic with strong bass. Dual pairing works well. Battery lasts 10 days easily with 4–5 hrs/day usage. Noise should offer an EQ app.`
    },
    {
      user: 'Parmanand',
      rating: 5,
      time: '9 months ago',
      summary: 'Stylish and comfortable',
      content: `Balanced sound, padded ear cups, and good build. Ideal for daily use and commutes.`
    },
    {
      user: 'Paletooth',
      rating: 4,
      time: '9 months ago',
      summary: 'Use codes to get it at 1699',
      content: `Cushions are great. May feel ear heat if new. Build quality is good.`
    }
  ]
};

export default function ProductDetailPage() {
  const { id } = useParams();

  if (id !== product.id) return <div className="p-6 text-center">Product not found.</div>;

  return (
    <main className="min-h-screen p-6 bg-gray-100 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <Image src="/product.webp" alt={product.title} width={400} height={400} className="rounded-xl" />
          <div>
            <h1 className="text-gray-800 text-3xl font-bold mb-1">{product.title}</h1>
            <p className="text-yellow-600 mb-2">⭐ {product.rating} ({product.reviewsCount} user reviews)</p>

            <p className="text-sm text-gray-600 mb-2">Colours:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.colors.map((color) => (
                <span key={color} className="text-gray-700 px-3 py-1 rounded-full bg-gray-200 text-sm">{color}</span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-1">Typically {product.typicalPrice}</p>
            <p className="text-2xl font-bold text-green-700 mb-2">{product.bestPrice} <span className="text-sm text-red-500 ml-2">{product.discount}</span></p>
            <p className="text-sm line-through text-gray-400 mb-4">MRP {product.mrp}</p>

            <p className="text-gray-700 mb-3">{product.description}</p>
            <p className="text-sm text-gray-500 mb-1">Availability: {product.availability}</p>
            <p className="text-sm text-gray-500 mb-4">Delivery: {product.delivery}</p>

            <p className="text-sm text-blue-500 mb-4">{product.offer}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">Buy from:</h2>
          <ul className="space-y-2">
            {product.shops.map((shop) => (
              <li key={shop.name} className="text-gray-600 border p-4 rounded-lg">
                <p className="font-semibold">{shop.name}</p>
                <p>{shop.price}</p>
                <p className="text-sm text-gray-600">{shop.stock}</p>
                <p className="text-sm text-gray-500">{shop.delivery}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">Specifications:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-2 rounded">
                <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{value}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">User Reviews:</h2>
          <ul className="space-y-4">
            {product.userReviews.map((review, index) => (
              <li key={index} className="border p-4 rounded-lg bg-gray-50">
                <p className="text-gray-600 font-semibold">{review.user} – ⭐ {review.rating}</p>
                <p className="text-sm text-gray-500 mb-1">{review.time}</p>
                <p className="text-gray-500 font-medium">{review.summary}</p>
                <p className="text-gray-700 text-sm mt-1">{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
