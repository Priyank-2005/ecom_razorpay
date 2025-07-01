'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (id: string) => void; // ✅ Add this line
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Course[]>([]);

  const addToCart = (course: Course) => setCart((prev) => [...prev, course]);

  const removeFromCart = (id: string) =>
    setCart((prev) => prev.filter((item) => item.id !== id)); // ✅ Implementation

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};
