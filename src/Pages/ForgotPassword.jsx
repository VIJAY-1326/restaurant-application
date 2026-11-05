import {
  Mail,
  ArrowRight,
  ArrowLeft,
  UtensilsCrossed,
} from "lucide-react";
// framer-motion


import {
  Link,

} from "react-router-dom";

import { useState } from "react";

import "./ForgotPassword.css";

function ForgotPassword() {


  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setMessage(
      "If an account exists with this email, password reset instructions will be sent."
    );
  };

  return (
    <div className="forgot-page">

      <div className="forgot-container">

        {/* BRAND SIDE */}

        <div className="forgot-brand">

          <div className="forgot-brand-icon">
            <UtensilsCrossed size={27} />
          </div>

          <span className="forgot-eyebrow">
            RESTAURA ACCOUNT
          </span>

          <h1>
            Welcome
            <br />
            <span>Back.</span>
          </h1>

          <p>
            Keep your dining experience
            simple, secure and memorable.
          </p>

          <div className="forgot-brand-line" />

          <small>
            Fine Dining Experience
          </small>

        </div>

        {/* FORM SIDE */}

        <div className="forgot-card">

          <Link
            to="/login"
            className="forgot-back"
          >
            <ArrowLeft size={15} />
            Back to Login
          </Link>

          <div className="forgot-header">

            <span>
              PASSWORD RESET
            </span>

            <h2>
              Forgot Password?
            </h2>

            <p>
              Enter your registered email
              address and we'll help you
              reset your password.
            </p>

          </div>

          {error && (
            <div className="forgot-error">
              {error}
            </div>
          )}

          {message && (
            <div className="forgot-success">
              {message}
            </div>
          )}

          <form
            className="forgot-form"
            onSubmit={handleSubmit}
          >

            <div className="forgot-field">

              <label>
                Email Address
              </label>

              <div className="forgot-input-wrapper">

                <Mail size={17} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError("");
                    setMessage("");
                  }}
                  autoComplete="email"
                />

              </div>

            </div>

            <button
              type="submit"
              className="forgot-button"
            >
              Send Reset Instructions
              <ArrowRight size={17} />
            </button>

          </form>

          <div className="forgot-login">

            <span>
              Remember your password?
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

export default ForgotPassword;