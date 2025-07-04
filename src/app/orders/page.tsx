'use client';
import { useEffect, useState } from 'react';

type Order = {
  product: string;
  price: number;
  date: string;
  orderId: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('orders');
    if (data) setOrders(JSON.parse(data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Order History</h1>
        {orders.length === 0 ? (
          <p className="text-gray-600 text-center">No orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {orders
              .slice()
              .reverse()
              .map((order, i) => (
                <li
                  key={order.orderId + i}
                  className="border p-4 rounded-xl bg-gray-50 shadow-sm"
                >
                  <p className="font-semibold">{order.product}</p>
                  <p className="text-gray-600">${order.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">
                    Ordered on {new Date(order.date).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400">Order ID: {order.orderId}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </main>
  );
}
