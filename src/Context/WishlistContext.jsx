import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext =
  createContext(null);

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] =
    useState(() => {
      try {
        const savedWishlist =
          localStorage.getItem(
            "restaurant_wishlist"
          );

        return savedWishlist
          ? JSON.parse(savedWishlist)
          : [];
      } catch {
        return [];
      }
    });

  useEffect(() => {
    localStorage.setItem(
      "restaurant_wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const isInWishlist = (foodId) => {
    return wishlistItems.some(
      (item) => item.id === foodId
    );
  };

  const toggleWishlist = (food) => {
    setWishlistItems(
      (currentItems) => {
        const exists =
          currentItems.some(
            (item) =>
              item.id === food.id
          );

        if (exists) {
          return currentItems.filter(
            (item) =>
              item.id !== food.id
          );
        }

        return [
          ...currentItems,
          food,
        ];
      }
    );
  };

  const removeFromWishlist = (
    foodId
  ) => {
    setWishlistItems(
      (currentItems) =>
        currentItems.filter(
          (item) =>
            item.id !== foodId
        )
    );
  };

  const wishlistCount =
    wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}

export default WishlistProvider;