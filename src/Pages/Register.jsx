
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
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
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
      setError("Passwords do not match.");
      return;
    }

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

        <div className="register-card">
          <div className="register-card-header">
            <span>CREATE ACCOUNT</span>

            <h2>Get Started</h2>

            <p>
              Create your account and start
              exploring our menu.
            </p>
          </div>

          {error && (
            <div className="register-error" role="alert">
              {error}
            </div>
          )}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            <div className="register-field">
              <label htmlFor="register-name">
                Full Name
              </label>

              <div className="register-input-wrapper">
                <UserRound size={17} />

                <input
                  id="register-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
            </div>

            <div className="register-two-columns">
              <div className="register-field">
                <label htmlFor="register-email">
                  Email Address
                </label>

                <div className="register-input-wrapper">
                  <Mail size={17} />

                  <input
                    id="register-email"
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
                <label htmlFor="register-phone">
                  Phone Number
                </label>

                <div className="register-input-wrapper">
                  <Phone size={17} />

                  <input
                    id="register-phone"
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

            <div className="register-field">
              <label htmlFor="register-password">
                Password
              </label>

              <div className="register-input-wrapper">
                <Lock size={17} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
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
                    setShowPassword((current) => !current)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
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

            <div className="register-field">
              <label htmlFor="register-confirm-password">
                Confirm Password
              </label>

              <div className="register-input-wrapper">
                <Lock size={17} />

                <input
                  id="register-confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (current) => !current
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
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

            <label className="register-terms">
              <input type="checkbox" required />

              <span className="register-check-box" />

              <span>
                I agree to the Terms & Conditions
              </span>
            </label>

            <button
              type="submit"
              className="register-button"
            >
              Create Account
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="register-login">
            <span>Already have an account?</span>

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
