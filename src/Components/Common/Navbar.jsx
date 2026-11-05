import { useState, useRef, useEffect } from "react";

import {
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Heart,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  LogOut,
  User,
  Package,
} from "lucide-react";

import { useCart } from "../../Context/CartContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useAuth } from "../../Context/AuthContext";

import "./Navbar.css";


function Navbar() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const navigate = useNavigate();

  const { cartCount } = useCart();

  const { wishlistCount } =
    useWishlist();

  const {
    user,
    logout,
    isLoggedIn,
  } = useAuth();

  const profileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);


  /* =================================================
     LOGOUT
  ================================================= */

  const handleLogout = () => {
    logout();

    setProfileOpen(false);
    setMobileMenu(false);

    navigate("/");
  };


  /* =================================================
     CLOSE MENUS
  ================================================= */

  const closeMenus = () => {
    setMobileMenu(false);
    setProfileOpen(false);
  };


  /* =================================================
     NAV CLASSES
  ================================================= */

  const navClass = ({
    isActive,
  }) =>
    isActive
      ? "nav-link active"
      : "nav-link";


  const iconClass = ({
    isActive,
  }) =>
    isActive
      ? "icon-action active"
      : "icon-action";


  const mobileNavClass = ({
    isActive,
  }) =>
    isActive
      ? "mobile-nav-link active"
      : "mobile-nav-link";


  return (
    <header className="navbar">

      <div className="navbar-container">


        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="restaurant-logo"
          onClick={closeMenus}
        >

          <div className="logo-mark">
            <span>R</span>
          </div>

          <div className="logo-content">

            <strong>
              RESTAURA
            </strong>

            <small>
              Fine Dining
            </small>

          </div>

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-nav">

          <NavLink
            to="/"
            end
            className={navClass}
          >
            Home
          </NavLink>


          <NavLink
            to="/menu"
            className={navClass}
          >
            Menu
          </NavLink>


          <NavLink
            to="/about"
            className={navClass}
          >
            About
          </NavLink>


          <NavLink
            to="/contact"
            className={navClass}
          >
            Contact
          </NavLink>

        </nav>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="navbar-actions">


          {/* =================================================
              WISHLIST
          ================================================= */}

          <NavLink
            to="/wishlist"
            className={iconClass}
            aria-label="Wishlist"
          >

            <Heart
              size={18}
              strokeWidth={1.7}
              fill="currentColor"
              fillOpacity={0.07}
            />

            {wishlistCount > 0 && (
              <span className="action-badge wishlist-badge">
                {wishlistCount}
              </span>
            )}

          </NavLink>


          {/* =================================================
              CART
          ================================================= */}

          <NavLink
            to="/cart"
            className={iconClass}
            aria-label="Cart"
          >

            <ShoppingBag
              size={18}
              strokeWidth={1.7}
            />

            {cartCount > 0 && (
              <span className="action-badge cart-badge">
                {cartCount}
              </span>
            )}

          </NavLink>


          {/* =================================================
              PROFILE
          ================================================= */}

          {isLoggedIn ? (

            <div className="profile-menu" ref={profileMenuRef}>

              <button
                type="button"
                className={
                  profileOpen
                    ? "profile-action profile-open"
                    : "profile-action"
                }
                onClick={() =>
                  setProfileOpen(
                    (current) =>
                      !current
                  )
                }
              >

                <div className="profile-icon">

                  <UserRound
                    size={15}
                    strokeWidth={1.8}
                  />

                </div>


                <span className="profile-name">

                  {user?.name ||
                    "Profile"}

                </span>


                <ChevronDown
                  size={13}
                  className={
                    profileOpen
                      ? "profile-chevron-open"
                      : ""
                  }
                />

              </button>


              {/* PROFILE DROPDOWN */}

              {profileOpen && (

                <div className="profile-dropdown">


                  <div className="profile-dropdown-header">

                    <div className="dropdown-avatar">

                      <UserRound
                        size={17}
                      />

                    </div>


                    <div>

                      <strong>
                        {user?.name ||
                          "User"}
                      </strong>

                      <small>
                        {user?.email || ""}
                      </small>

                    </div>

                  </div>


                  <div className="profile-dropdown-divider" />


                  <NavLink
                    to="/profile"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                  >

                    <User size={15} />

                    <span>
                      My Profile
                    </span>

                  </NavLink>


                  <NavLink
                    to="/orders"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                  >

                    <Package size={15} />

                    <span>
                      My Orders
                    </span>

                  </NavLink>


                  <button
                    type="button"
                    className="logout-button"
                    onClick={
                      handleLogout
                    }
                  >

                    <LogOut size={15} />

                    <span>
                      Logout
                    </span>

                  </button>

                </div>

              )}

            </div>

          ) : (

            /* =================================================
               LOGIN
            ================================================= */

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "profile-action login-action active"
                  : "profile-action login-action"
              }
            >

              <div className="profile-icon">

                <UserRound
                  size={15}
                  strokeWidth={1.8}
                />

              </div>

              <span>
                Login
              </span>

            </NavLink>

          )}


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() =>
              setMobileMenu(
                (current) =>
                  !current
              )
            }
            aria-label="Toggle navigation"
          >

            {mobileMenu ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}

          </button>

        </div>

      </div>


      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      {mobileMenu && (

        <div className="mobile-navigation">

          <div className="mobile-navigation-inner">


            <NavLink
              to="/"
              end
              className={mobileNavClass}
              onClick={closeMenus}
            >
              Home
            </NavLink>


            <NavLink
              to="/menu"
              className={mobileNavClass}
              onClick={closeMenus}
            >
              Menu
            </NavLink>


            <NavLink
              to="/wishlist"
              className={mobileNavClass}
              onClick={closeMenus}
            >

              <span>
                Wishlist
              </span>

              {wishlistCount > 0 && (
                <span className="mobile-badge">
                  {wishlistCount}
                </span>
              )}

            </NavLink>


            <NavLink
              to="/cart"
              className={mobileNavClass}
              onClick={closeMenus}
            >

              <span>
                Cart
              </span>

              {cartCount > 0 && (
                <span className="mobile-badge">
                  {cartCount}
                </span>
              )}

            </NavLink>


            {isLoggedIn && (
              <>

                <NavLink
                  to="/profile"
                  className={mobileNavClass}
                  onClick={closeMenus}
                >
                  My Profile
                </NavLink>


                <NavLink
                  to="/orders"
                  className={mobileNavClass}
                  onClick={closeMenus}
                >
                  My Orders
                </NavLink>

              </>
            )}


            <NavLink
              to="/about"
              className={mobileNavClass}
              onClick={closeMenus}
            >
              About
            </NavLink>


            <NavLink
              to="/contact"
              className={mobileNavClass}
              onClick={closeMenus}
            >
              Contact
            </NavLink>


            {isLoggedIn ? (

              <button
                type="button"
                className="mobile-login"
                onClick={handleLogout}
              >

                <span>
                  Logout
                </span>

                <LogOut size={16} />

              </button>

            ) : (

              <NavLink
                to="/login"
                className="mobile-login"
                onClick={closeMenus}
              >

                <span>
                  Login
                </span>

                <ArrowRight size={16} />

              </NavLink>

            )}

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;
