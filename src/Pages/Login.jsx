import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
// framer-motion


import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../Context/AuthContext";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    /*
      Demo login.

      Later, when backend is connected,
      this section will call the login API.
    */

    const userName = email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );

    const loggedInUser = {
      id: 1,
      name: userName || "Restaurant User",
      email: email,
      phone: "",
      role: "CUSTOMER",
    };

    // Save user into AuthContext
    login(loggedInUser);

    // Go to home page
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* =========================
            LEFT BRAND SECTION
        ========================== */}

        <div className="login-brand">

          <div className="login-brand-icon">
            <UtensilsCrossed size={27} />
          </div>

          <span className="login-brand-eyebrow">
            WELCOME TO
          </span>

          <h1>
            RESTAURA
          </h1>

          <p>
            Premium food.
            <br />
            Authentic flavors.
            <br />
            Memorable moments.
          </p>

          <div className="login-brand-line" />

          <small>
            Fine Dining Experience
          </small>

        </div>


        {/* =========================
            LOGIN CARD
        ========================== */}

        <div className="login-card">

          <div className="login-card-header">

            <span>
              ACCOUNT
            </span>

            <h2>
              Welcome Back
            </h2>

            <p>
              Sign in to continue your dining experience.
            </p>

          </div>


          {/* ERROR */}

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          {/* FORM */}

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-field">

              <label>
                Email Address
              </label>

              <div className="login-input-wrapper">

                <Mail size={17} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="login-field">

              <div className="login-label-row">

                <label>
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <div className="login-input-wrapper">

                <Lock size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* REMEMBER */}

            <label className="remember-me">

              <input type="checkbox" />

              <span className="remember-box" />

              <span>
                Remember me
              </span>

            </label>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-button"
            >
              Sign In

              <ArrowRight size={17} />
            </button>

          </form>


          {/* REGISTER */}

          <div className="login-register">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;