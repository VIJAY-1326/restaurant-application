import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart =
        localStorage.getItem("restaurant_cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "restaurant_cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (food) => {
    setCartItems((currentItems) => {
      const existingItem =
        currentItems.find(
          (item) => item.id === food.id
        );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...food,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (foodId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === foodId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (foodId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === foodId
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const removeFromCart = (foodId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== foodId
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price) *
        item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}

export default CartProvider;