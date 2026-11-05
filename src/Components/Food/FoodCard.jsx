
import { useState } from "react";
import { Star, Plus, Heart } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import "./FoodCard.css";

function createFallbackImage(food) {
  const typeText = food.type === "VEG" ? "VEG" : "NON-VEG";
  const categoryText = food.category || "Delicious Food";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#181818"/>
          <stop offset="100%" stop-color="#080808"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#f5b041" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#f5b041" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="900" height="650" fill="url(#bg)"/>
      <rect width="900" height="650" fill="url(#glow)"/>
      <circle cx="450" cy="275" r="125" fill="#101010" stroke="#3a3a3a" stroke-width="2"/>
      <circle cx="450" cy="275" r="100" fill="none" stroke="#f5b041" stroke-opacity="0.25"/>
      <text x="450" y="315" text-anchor="middle" font-size="90" font-family="Arial, sans-serif">🍽</text>
      <text x="450" y="470" text-anchor="middle" fill="#ffffff" font-size="30" font-family="Arial, sans-serif" font-weight="600">${food.name}</text>
      <text x="450" y="510" text-anchor="middle" fill="#f5b041" font-size="14" font-family="Arial, sans-serif" letter-spacing="3">${categoryText.toUpperCase()}</text>
      <text x="450" y="545" text-anchor="middle" fill="#777777" font-size="12" font-family="Arial, sans-serif" letter-spacing="2">${typeText}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [imageSrc, setImageSrc] = useState(food.image);
  const [imageFailed, setImageFailed] = useState(false);

  const wishlisted = isInWishlist(food.id);

  const handleImageError = () => {
    if (imageFailed) return;

    setImageFailed(true);
    setImageSrc(createFallbackImage(food));
  };

  return (
    <article className="menu-food-card">
      <div className="menu-food-image">
        <img
          src={imageSrc}
          alt={food.name}
          onError={handleImageError}
          loading="lazy"
        />

        <button
          type="button"
          className={wishlisted ? "food-heart wishlist-active" : "food-heart"}
          onClick={() => toggleWishlist(food)}
          aria-label={
            wishlisted
              ? `Remove ${food.name} from wishlist`
              : `Add ${food.name} to wishlist`
          }
        >
          <Heart
            size={17}
            fill={wishlisted ? "currentColor" : "none"}
          />
        </button>

        <div className="food-type-badge">
          <span className={food.type === "VEG" ? "veg-dot" : "nonveg-dot"} />
          {food.type === "VEG" ? "VEG" : "NON-VEG"}
        </div>
      </div>

      <div className="menu-food-content">
        <div className="food-rating">
          <Star size={13} fill="currentColor" />
          <span>{food.rating}</span>
          <small>({food.reviews})</small>
        </div>

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="menu-food-bottom">
          <strong>₹{food.price}</strong>

          <button
            type="button"
            className="add-food-button"
            onClick={() => addToCart(food)}
          >
            <Plus size={17} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
