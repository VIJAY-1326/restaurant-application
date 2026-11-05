import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

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
      setError("Please enter your email and password.");
      return;
    }

    const userName = email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    const loggedInUser = {
      id: 1,
      name: userName || "Restaurant User",
      email,
      phone: "",
      role: "CUSTOMER",
    };

    login(loggedInUser);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-brand">
          <div className="login-brand-icon">
            <UtensilsCrossed size={27} />
          </div>

          <span className="login-brand-eyebrow">
            WELCOME TO
          </span>

          <h1>RESTAURA</h1>

          <p>
            Premium food.
            <br />
            Authentic flavors.
            <br />
            Memorable moments.
          </p>

          <div className="login-brand-line" />

          <small>Fine Dining Experience</small>
        </div>

        <div className="login-card">
          <div className="login-card-header">
            <span>ACCOUNT</span>

            <h2>Welcome Back</h2>

            <p>
              Sign in to continue your dining experience.
            </p>
          </div>

          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <div className="login-field">
              <label htmlFor="login-email">
                Email Address
              </label>

              <div className="login-input-wrapper">
                <Mail size={17} />

                <input
                  id="login-email"
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

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <div className="login-input-wrapper">
                <Lock size={17} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
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

            <label className="remember-me">
              <input type="checkbox" name="remember" />
              <span className="remember-box" />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="login-button"
            >
              Sign In
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="login-register">
            <span>Don't have an account?</span>

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