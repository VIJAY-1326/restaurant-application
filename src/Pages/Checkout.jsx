
import { useState, useEffect } from "react";
import {
  MapPin,
  UserRound,
  Mail,
  Phone,
  Home,
  CreditCard,
  Banknote,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useOrders } from "../Context/OrderContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((current) => ({
        ...current,
        name: current.name || user.name || "",
        email: current.email || user.email || "",
        phone: current.phone || user.phone || "",
      }));
    }
  }, [user]);

  const deliveryFee = cartTotal >= 499 ? 0 : 40;
  const grandTotal = cartTotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    setError("");

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.state.trim() ||
      !formData.pincode.trim()
    ) {
      setError("Please fill in all delivery details.");
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    const order = createOrder({
      userId: user?.id || 1,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: item.quantity,
        image: item.image,
        subtotal: Number(item.price) * item.quantity,
      })),
      subtotal: cartTotal,
      deliveryFee,
      totalAmount: grandTotal,
      paymentMethod,
      paymentStatus: "PENDING",
      address: {
        addressLine: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
      },
    });

    clearCart();
    navigate(`/order-success/${order.id}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty-icon">
            <ShoppingBag size={38} />
          </div>

          <span>CHECKOUT</span>

          <h1>Your Cart Is Empty</h1>

          <p>
            Add some delicious dishes before proceeding to checkout.
          </p>

          <Link to="/menu" className="checkout-primary-button">
            Explore Menu
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <Link to="/cart" className="checkout-back">
            <ArrowLeft size={15} />
            Back to Cart
          </Link>

          <span>SECURE CHECKOUT</span>

          <h1>Complete Your Order</h1>

          <p>
            Just a few details and your delicious meal will be on its way.
          </p>
        </div>

        {error && (
          <div className="checkout-error" role="alert">
            {error}
          </div>
        )}

        <form
          className="checkout-layout"
          onSubmit={handlePlaceOrder}
        >
          <div className="checkout-main">
            <section className="checkout-section">
              <div className="checkout-section-heading">
                <div className="checkout-section-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>STEP 01</span>
                  <h2>Delivery Details</h2>
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="checkout-name">Full Name</label>

                <div className="checkout-input">
                  <UserRound size={16} />

                  <input
                    id="checkout-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="checkout-two-columns">
                <div className="checkout-field">
                  <label htmlFor="checkout-email">Email Address</label>

                  <div className="checkout-input">
                    <Mail size={16} />

                    <input
                      id="checkout-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="checkout-field">
                  <label htmlFor="checkout-phone">Phone Number</label>

                  <div className="checkout-input">
                    <Phone size={16} />

                    <input
                      id="checkout-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="checkout-address">Delivery Address</label>

                <div className="checkout-input">
                  <Home size={16} />

                  <input
                    id="checkout-address"
                    type="text"
                    name="address"
                    placeholder="House no, street, area"
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    required
                  />
                </div>
              </div>

              <div className="checkout-three-columns">
                <div className="checkout-field">
                  <label htmlFor="checkout-city">City</label>

                  <div className="checkout-input">
                    <input
                      id="checkout-city"
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="address-level2"
                      required
                    />
                  </div>
                </div>

                <div className="checkout-field">
                  <label htmlFor="checkout-state">State</label>

                  <div className="checkout-input">
                    <input
                      id="checkout-state"
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      autoComplete="address-level1"
                      required
                    />
                  </div>
                </div>

                <div className="checkout-field">
                  <label htmlFor="checkout-pincode">Pincode</label>

                  <div className="checkout-input">
                    <input
                      id="checkout-pincode"
                      type="text"
                      name="pincode"
                      placeholder="6-digit PIN"
                      maxLength={6}
                      inputMode="numeric"
                      value={formData.pincode}
                      onChange={handleChange}
                      autoComplete="postal-code"
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="checkout-section">
              <div className="checkout-section-heading">
                <div className="checkout-section-icon">
                  <CreditCard size={19} />
                </div>

                <div>
                  <span>STEP 02</span>
                  <h2>Payment Method</h2>
                </div>
              </div>

              <div className="payment-options">
                <label
                  className={
                    paymentMethod === "COD"
                      ? "payment-option payment-active"
                      : "payment-option"
                  }
                >
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(event) =>
                      setPaymentMethod(event.target.value)
                    }
                  />

                  <div className="payment-icon">
                    <Banknote size={21} />
                  </div>

                  <div className="payment-content">
                    <strong>Cash on Delivery</strong>
                    <span>Pay when your order arrives</span>
                  </div>

                  <CheckCircle2
                    size={18}
                    className="payment-check"
                  />
                </label>

                <label
                  className={
                    paymentMethod === "ONLINE"
                      ? "payment-option payment-active"
                      : "payment-option"
                  }
                >
                  <input
                    type="radio"
                    name="payment"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={(event) =>
                      setPaymentMethod(event.target.value)
                    }
                  />

                  <div className="payment-icon">
                    <CreditCard size={21} />
                  </div>

                  <div className="payment-content">
                    <strong>Online Payment</strong>
                    <span>UPI, cards & net banking</span>
                  </div>

                  <CheckCircle2
                    size={18}
                    className="payment-check"
                  />
                </label>
              </div>

              {paymentMethod === "ONLINE" && (
                <div className="online-demo-note">
                  Online payment gateway will be connected in the next step.
                  No payment will be collected at this time.
                </div>
              )}
            </section>

            <div className="checkout-security">
              <ShieldCheck size={18} />

              <div>
                <strong>Secure Checkout</strong>
                <p>
                  Your information is protected and securely processed.
                </p>
              </div>
            </div>
          </div>

          <aside className="checkout-summary">
            <div className="summary-header">
              <div>
                <span>YOUR ORDER</span>
                <h2>Order Summary</h2>
              </div>

              <div className="summary-item-count">
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </div>
            </div>

            <div className="checkout-items">
              {cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <div className="checkout-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                    <span>{item.quantity}</span>
                  </div>

                  <div className="checkout-item-info">
                    <strong>{item.name}</strong>
                    <span>
                      ₹{Number(item.price).toFixed(2)}
                    </span>
                  </div>

                  <strong className="checkout-item-total">
                    ₹
                    {(
                      Number(item.price) * item.quantity
                    ).toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="summary-prices">
              <div>
                <span>Subtotal</span>
                <strong>₹{cartTotal.toFixed(2)}</strong>
              </div>

              <div>
                <span>Delivery Fee</span>

                <strong
                  className={
                    deliveryFee === 0 ? "free-delivery" : ""
                  }
                >
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee.toFixed(2)}`}
                </strong>
              </div>
            </div>

            {deliveryFee === 0 && (
              <div className="free-delivery-message">
                🎉 You unlocked free delivery!
              </div>
            )}

            <div className="summary-total">
              <span>Total Amount</span>
              <strong>₹{grandTotal.toFixed(2)}</strong>
            </div>

            <button type="submit" className="place-order-button">
              Place Order
              <ArrowRight size={18} />
            </button>

            <p className="summary-note">
              By placing your order, you agree to our terms and conditions.
            </p>
          </aside>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
