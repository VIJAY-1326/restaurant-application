
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useWishlist } from "../Context/WishlistContext";
import { useCart } from "../Context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

import "./Wishlist.css";

const viewportSettings = {
  amount: 0.2,
  once: false,
};

const smoothTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealScale = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Wishlist() {
  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <motion.div
          className="wishlist-empty"
          variants={revealScale}
          initial="hidden"
          animate="visible"
          transition={smoothTransition}
        >
          <motion.div
            className="empty-wishlist-icon"
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Heart size={34} />
          </motion.div>

          <motion.span
            className="wishlist-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            YOUR COLLECTION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Your Wishlist Is Empty
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Save your favourite dishes
            here and order them anytime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link
              to="/menu"
              className="wishlist-browse-button"
            >
              Discover Dishes
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <motion.div
          className="wishlist-header"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={smoothTransition}
        >
          <span className="wishlist-eyebrow">
            YOUR COLLECTION
          </span>

          <h1>
            My <span>Wishlist</span>
          </h1>

          <p>
            Your favourite dishes,
            all in one beautiful place.
          </p>
        </motion.div>

        <motion.div
          className="wishlist-grid"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <AnimatePresence mode="popLayout">
            {wishlistItems.map((item) => (
              <motion.article
                className="wishlist-card"
                key={item.id}
                variants={cardItem}
                layout
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: -20,
                  transition: {
                    duration: 0.3,
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="wishlist-image">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <motion.button
                    type="button"
                    className="wishlist-remove"
                    onClick={() => toggleWishlist(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <Heart
                      size={17}
                      fill="currentColor"
                    />
                  </motion.button>

                  <div className="wishlist-food-type">
                    <span
                      className={
                        item.type === "VEG"
                          ? "wishlist-veg-dot"
                          : "wishlist-nonveg-dot"
                      }
                    />

                    {item.type === "VEG" ? "VEG" : "NON-VEG"}
                  </div>
                </div>

                <div className="wishlist-content">
                  <motion.div
                    className="wishlist-rating"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: false,
                      amount: 0.2,
                    }}
                    transition={{ duration: 0.45 }}
                  >
                    <Star
                      size={13}
                      fill="currentColor"
                    />

                    <span>{item.rating}</span>

                    <small>({item.reviews})</small>
                  </motion.div>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <div className="wishlist-bottom">
                    <strong>₹{item.price}</strong>

                    <motion.button
                      type="button"
                      className="wishlist-cart-button"
                      onClick={() => addToCart(item)}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ShoppingBag size={16} />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Wishlist;
