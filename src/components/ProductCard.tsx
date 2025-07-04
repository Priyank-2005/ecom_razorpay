'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function ProductCard() {
    const router = useRouter();
    const { addToCart } = useCart();

    const product = {
        id: 'headphones-001',
        title: 'Amazing Headphones',
        price: 99,
        description: 'Premium sound. Noise cancellation. 40-hour battery life.',
        image: '/product.jpg',
        quantity: 1,
    };

    const handleBuyNow = () => {
        addToCart(product);
        router.push('/checkout');
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product);
        alert('Added to cart!');
    };

    const goToDetails = () => {
        router.push(`/product/${product.id}`);
    };

    return (
        <div
            onClick={goToDetails}
            className="cursor-pointer max-w-md bg-white rounded-2xl shadow-xl p-6 mx-auto hover:shadow-2xl transition"
        >
            <Image
                src="/product.webp"
                alt="Product Image"
                width={250}
                height={250}
                className="rounded-xl object-contain"
            />
            <h2 className="text-gray-700 text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-gray-600 text-xl font-semibold mb-4">₹{product.price}</div>

            <div className="flex space-x-4">
                <button
                    onClick={handleAddToCart}
                    className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                    Add to Cart
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleBuyNow();
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}
