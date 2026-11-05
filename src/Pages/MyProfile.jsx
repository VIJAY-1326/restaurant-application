
import {
  UserRound,
  Mail,
  Phone,
  Package,
  LogOut,
  ArrowRight,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../Context/AuthContext";
import { useOrders } from "../Context/OrderContext";

import "./MyProfile.css";

function MyProfile() {
  const navigate = useNavigate();

  const {
    user,
    logout,
    isLoggedIn,
  } = useAuth();

  const {
    getUserOrders,
  } = useOrders();

  if (!isLoggedIn) {
    return (
      <div className="profile-page">
        <div className="profile-login-box">
          <UserRound size={45} />

          <h1>Login Required</h1>

          <p>
            Please login to view your profile.
          </p>

          <Link
            to="/login"
            className="profile-primary-button"
          >
            Sign In
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    );
  }

  const userOrders = getUserOrders(
    user?.id,
    user?.email
  );

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-heading">
          <span>ACCOUNT</span>

          <h1>My Profile</h1>

          <p>
            Manage your account details
            and restaurant activity.
          </p>
        </div>

        <div className="profile-grid">
          <div className="profile-main-card">
            <div className="profile-avatar">
              {initials}
            </div>

            <h2>{user?.name}</h2>

            <span className="profile-role">
              {user?.role || "CUSTOMER"}
            </span>

            <div className="profile-divider" />

            <div className="profile-detail">
              <Mail size={17} />

              <div>
                <small>Email Address</small>
                <strong>{user?.email}</strong>
              </div>
            </div>

            <div className="profile-detail">
              <Phone size={17} />

              <div>
                <small>Phone Number</small>
                <strong>
                  {user?.phone || "Not added"}
                </strong>
              </div>
            </div>

            <button
              type="button"
              className="profile-logout-button"
              onClick={handleLogout}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          <div className="profile-activity">
            <div className="profile-activity-card">
              <div className="activity-icon">
                <Package size={21} />
              </div>

              <div>
                <span>TOTAL ORDERS</span>
                <strong>{userOrders.length}</strong>
              </div>
            </div>

            <Link
              to="/orders"
              className="profile-orders-link"
            >
              <div>
                <Package size={18} />

                <div>
                  <strong>My Orders</strong>

                  <span>
                    View your complete order history
                  </span>
                </div>
              </div>

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
