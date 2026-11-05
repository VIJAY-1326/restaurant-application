
import {
  CheckCircle2,
  PackageCheck,
  ShoppingBag,
  ArrowRight,
  Home,
  Clock3,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { useOrders } from "../Context/OrderContext";

import "./OrderSuccess.css";

function OrderSuccess() {
  const { orderId } = useParams();

  const { getOrderById } = useOrders();

  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="order-success-page">
        <div className="order-not-found">
          <h1>Order Not Found</h1>

          <p>
            We couldn't find this order.
          </p>

          <Link
            to="/orders"
            className="success-primary-button"
          >
            My Orders
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-success-page">
      <div className="order-success-container">
        <div className="success-icon">
          <CheckCircle2 size={48} />
        </div>

        <span className="success-eyebrow">
          ORDER CONFIRMED
        </span>

        <h1>
          Thank You For
          <span> Your Order</span>
        </h1>

        <p className="success-message">
          Your order has been placed
          successfully. Our kitchen is
          getting your delicious food ready.
        </p>

        <div className="order-number-box">
          <span>ORDER NUMBER</span>

          <strong>
            {order.orderNumber}
          </strong>
        </div>

        <div className="order-details-card">
          <div className="order-details-header">
            <div>
              <span>ORDER DETAILS</span>
              <h2>Your Order</h2>
            </div>

            <div className="order-status">
              {order.status}
            </div>
          </div>

          <div className="ordered-items">
            {order.items.map((item) => (
              <div
                className="ordered-item"
                key={item.id}
              >
                <div className="ordered-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>

                <div className="ordered-item-info">
                  <strong>{item.name}</strong>

                  <span>
                    ₹{item.price} × {item.quantity}
                  </span>
                </div>

                <strong className="ordered-item-total">
                  ₹{item.subtotal}
                </strong>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <div>
              <span>Payment</span>
              <strong>{order.paymentMethod}</strong>
            </div>

            <div>
              <span>Total Amount</span>
              <strong>₹{order.totalAmount}</strong>
            </div>
          </div>

          <div className="delivery-details">
            <span>DELIVERY ADDRESS</span>

            <p>
              {order.address?.addressLine}
              <br />
              {order.address?.city},{" "}
              {order.address?.state} -{" "}
              {order.address?.pincode}
            </p>
          </div>
        </div>

        <div className="success-info-grid">
          <div className="success-info-card">
            <div className="success-info-icon">
              <PackageCheck size={21} />
            </div>

            <div>
              <strong>Order Confirmed</strong>

              <p>
                Your order has been
                successfully confirmed.
              </p>
            </div>
          </div>

          <div className="success-info-card">
            <div className="success-info-icon">
              <Clock3 size={21} />
            </div>

            <div>
              <strong>Preparing Your Food</strong>

              <p>
                Our chefs are preparing
                your dishes.
              </p>
            </div>
          </div>
        </div>

        <div className="success-actions">
          <Link
            to="/orders"
            className="success-primary-button"
          >
            View My Orders
            <ArrowRight size={17} />
          </Link>

          <Link
            to="/menu"
            className="success-secondary-button"
          >
            <ShoppingBag size={16} />
            Order More
          </Link>

          <Link
            to="/"
            className="success-secondary-button"
          >
            <Home size={16} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
