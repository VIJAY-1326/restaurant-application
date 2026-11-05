import {
  UserRound,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import { useAuth } from "../Context/AuthContext";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    /*
      Backend registration will be connected later.
      For now we redirect to login.
    */

    const newUser = {
      id: Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      role: "CUSTOMER",
    };

    login(newUser);
    navigate("/profile");
  };

  return (
    <div className="register-page">

      <div className="register-container">

        {/* =========================
            LEFT BRAND
        ========================== */}

        <div className="register-brand">

          <div className="register-brand-icon">
            <UtensilsCrossed size={27} />
          </div>

          <span className="register-brand-eyebrow">
            JOIN RESTAURA
          </span>

          <h1>
            A Better Way
            <br />
            To <span>Dine</span>
          </h1>

          <p>
            Discover exceptional dishes,
            save your favourites and enjoy
            a seamless dining experience.
          </p>

          <div className="register-brand-line" />

          <small>
            Premium Dining Experience
          </small>

        </div>

        {/* =========================
            REGISTER CARD
        ========================== */}

        <div className="register-card">

          <div className="register-card-header">

            <span>
              CREATE ACCOUNT
            </span>

            <h2>
              Get Started
            </h2>

            <p>
              Create your account and start
              exploring our menu.
            </p>

          </div>

          {/* ERROR */}

          {error && (
            <div className="register-error">
              {error}
            </div>
          )}

          {/* FORM */}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="register-field">

              <label>
                Full Name
              </label>

              <div className="register-input-wrapper">

                <UserRound size={17} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

              </div>

            </div>

            {/* EMAIL + PHONE */}

            <div className="register-two-columns">

              <div className="register-field">

                <label>
                  Email Address
                </label>

                <div className="register-input-wrapper">

                  <Mail size={17} />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />

                </div>

              </div>

              <div className="register-field">

                <label>
                  Phone Number
                </label>

                <div className="register-input-wrapper">

                  <Phone size={17} />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />

                </div>

              </div>

            </div>

            {/* PASSWORD */}

            <div className="register-field">

              <label>
                Password
              </label>

              <div className="register-input-wrapper">

                <Lock size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
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

            {/* CONFIRM PASSWORD */}

            <div className="register-field">

              <label>
                Confirm Password
              </label>

              <div className="register-input-wrapper">

                <Lock size={17} />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>

            {/* TERMS */}

            <label className="register-terms">

              <input
                type="checkbox"
                required
              />

              <span className="register-check-box" />

              <span>
                I agree to the Terms &
                Conditions
              </span>

            </label>

            {/* BUTTON */}

            <button
              type="submit"
              className="register-button"
            >
              Create Account
              <ArrowRight size={17} />
            </button>

          </form>

          {/* LOGIN */}

          <div className="register-login">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;