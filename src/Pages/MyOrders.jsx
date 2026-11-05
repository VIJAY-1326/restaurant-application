import {
  Package,
  ArrowRight,
  ShoppingBag,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useOrders } from "../Context/OrderContext";
import "./MyOrders.css";

function MyOrders() {
  const { user } = useAuth();
  const { getUserOrders } = useOrders();

  const orders = user
    ? getUserOrders(user.id, user.email)
    : [];

  if (!user) {
    return (
      <div className="orders-page">
        <div className="orders-login-box">
          <div className="orders-login-icon">
            <Package size={42} />
          </div>

          <span className="orders-eyebrow">
            RESTAURA ACCOUNT
          </span>

          <h1>Please Login</h1>

          <p>Login to view your orders.</p>

          <Link
            to="/login"
            className="orders-primary-button"
          >
            Sign In
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <div className="orders-heading">
          <div className="orders-heading-content">
            <span className="orders-eyebrow">
              ACCOUNT
            </span>

            <h1>
              My <em>Orders</em>
            </h1>

            <p>
              Track and manage your restaurant orders.
            </p>
          </div>

          <Link
            to="/menu"
            className="orders-outline-button"
          >
            <ShoppingBag size={16} />
            Order Food
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="orders-empty">
            <div className="orders-empty-icon">
              <Package size={35} />
            </div>

            <span className="orders-empty-eyebrow">
              YOUR ORDER HISTORY
            </span>

            <h2>No Orders Yet</h2>

            <p>
              Your delicious journey starts here.
            </p>

            <Link
              to="/menu"
              className="orders-primary-button"
            >
              Explore Menu
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div
                className="order-list-card"
                key={order.id}
              >
                <div className="order-list-top">
                  <div className="order-list-number">
                    <span>ORDER</span>

                    <strong>
                      {order.orderNumber}
                    </strong>
                  </div>

                  <span className="order-list-status">
                    {order.status}
                  </span>
                </div>

                <div className="order-list-info">
                  <div className="order-info-date">
                    <Clock3 size={15} />

                    <span>
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </span>
                  </div>

                  <div className="order-info-items">
                    <Package size={15} />

                    <span>
                      {order.items.length}{" "}
                      {order.items.length === 1
                        ? "item"
                        : "items"}
                    </span>
                  </div>

                  <strong className="order-info-total">
                    ₹{order.totalAmount}
                  </strong>
                </div>

                <div className="order-list-bottom">
                  <div className="mini-order-items">
                    {order.items
                      .slice(0, 3)
                      .map((item) => (
                        <span key={item.id}>
                          {item.name}
                          {" × "}
                          {item.quantity}
                        </span>
                      ))}

                    {order.items.length > 3 && (
                      <span className="more-order-items">
                        +{order.items.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/orders/${order.id}`}
                    className="view-order-button"
                  >
                    View Details
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders;