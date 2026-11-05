
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const deliveryFee =
    cartTotal >= 499 || cartTotal === 0 ? 0 : 40;

  const grandTotal = cartTotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="empty-cart-icon">
            <ShoppingBag size={34} />
          </div>

          <span className="cart-eyebrow">
            YOUR CART
          </span>

          <h1>Your Cart Is Empty</h1>

          <p>
            Looks like you haven't added
            anything delicious yet.
          </p>

          <Link to="/menu" className="cart-browse-button">
            Explore Menu
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-header-content">
            <span className="cart-eyebrow">
              YOUR ORDER
            </span>

            <h1>
              Shopping <span>Cart</span>
            </h1>

            <p>
              Review your selected dishes
              before checkout.
            </p>
          </div>

          <button
            type="button"
            className="clear-cart-button"
            onClick={clearCart}
          >
            <Trash2 size={16} />
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          <section className="cart-items-section">
            <div className="cart-items-heading">
              <span>{cartItems.length} ITEMS</span>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  <div className="cart-item-info">
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>

                      <p>
                        {item.type === "VEG"
                          ? "Vegetarian"
                          : "Non-Vegetarian"}
                      </p>
                    </div>

                    <strong>₹{item.price}</strong>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <Minus size={15} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <Plus size={15} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-item-button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="cart-summary">
            <div className="summary-top">
              <span>ORDER SUMMARY</span>
              <ShoppingBag size={19} />
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <div className="summary-line">
              <span>Delivery Fee</span>
              <strong>
                {deliveryFee === 0
                  ? "FREE"
                  : `₹${deliveryFee}`}
              </strong>
            </div>

            {cartTotal < 499 && cartTotal > 0 && (
              <div className="delivery-note">
                Add ₹{499 - cartTotal} more for free delivery.
              </div>
            )}

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{grandTotal}</strong>
            </div>

            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
              <ArrowRight size={18} />
            </Link>

            <Link to="/menu" className="continue-shopping">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;
