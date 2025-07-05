import Navbar from '@/components/Navbar';
import CategorySlider from '../components/CategorySlider';
import ProductGrid from '../components/ProductGrid';
import HeroBanner from '../components/HeroBanner';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <HeroBanner />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-xl sm:text-2xl text-gray-800 font-bold mb-4">Shop by Category</h2>
          <CategorySlider />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-xl sm:text-2xl text-gray-800 font-bold mb-4">Top Deals</h2>
          <ProductGrid />
        </section>
      </main>
    </>
  );
}

