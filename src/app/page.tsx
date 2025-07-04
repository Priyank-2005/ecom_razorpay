import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-gray-800 text-4xl font-bold text-center mb-10">
            Welcome to Our Product Store
          </h1>
          <ProductCard />
        </div>
      </main>
    </>
  );
}
