import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import OrderSuccess from "../Pages/OrderSuccess";


import About from "../Pages/About";
import Contact from "../Pages/Contact";


import MyProfile from "../Pages/MyProfile";
import MyOrders from "../Pages/MyOrders";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";

function SimplePage({ title }) {
  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "130px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#080808",
        color: "#ffffff",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* MENU */}
      <Route
        path="/menu"
        element={<Menu />}
      />

      {/* WISHLIST */}
      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* CART */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* CHECKOUT */}
      <Route
        path="/checkout"
        element={<Checkout />}
      />

      {/* ORDER SUCCESS */}
      <Route
        path="/order-success/:orderId"
        element={<OrderSuccess />}
      />

      {/* PROFILE */}
      <Route
        path="/profile"
        element={<MyProfile />}
      />

      {/* ORDERS */}
      <Route
        path="/orders"
        element={<MyOrders />}
      />

      {/* ORDER DETAILS */}
      <Route
        path="/orders/:orderId"
        element={<OrderSuccess />}
      />

      {/* AUTH */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ForgotPassword />}
      />

      {/* STATIC PAGES */}
      <Route
        path="/about"
        element={
          <About />
        }
      />

      <Route
        path="/contact"
        element={
          <Contact />
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <SimplePage title="Page Not Found" />
        }
      />
    </Routes>
  );
}

export default AppRoutes;