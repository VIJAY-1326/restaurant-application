import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const OrderContext = createContext(null);

function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders =
        localStorage.getItem(
          "restaurant_orders"
        );

      return savedOrders
        ? JSON.parse(savedOrders)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "restaurant_orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  const createOrder = (orderData) => {
    const order = {
      id: Date.now(),

      orderNumber:
        "RST-" +
        Date.now()
          .toString()
          .slice(-6),

      status: "PLACED",

      createdAt:
        new Date().toISOString(),

      ...orderData,
    };

    setOrders((currentOrders) => [
      order,
      ...currentOrders,
    ]);

    return order;
  };

  const getOrderById = (orderId) => {
    return orders.find(
      (order) =>
        String(order.id) ===
        String(orderId)
    );
  };

  const getUserOrders = (userId, email) => {
    return orders.filter(
      (order) =>
        (userId && String(order.userId) === String(userId)) || (email && order.customer?.email && String(order.customer.email).toLowerCase() === String(email).toLowerCase())

    );
  };

  const latestOrder =
    orders.length > 0
      ? orders[0]
      : null;

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        getUserOrders,
        latestOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context =
    useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrders must be used inside OrderProvider"
    );
  }

  return context;
}

export default OrderProvider;