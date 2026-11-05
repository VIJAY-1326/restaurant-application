import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../Context/SidebarContext";

import "./Footer.css";

function Footer() {
  const { sidebarOpen } = useSidebar();
  const location = useLocation();

  const isMenuPage = location.pathname === "/menu";
  const isSidebarActive = isMenuPage && sidebarOpen;

  return (
    <footer
      className={
        isSidebarActive
          ? "restaura-footer footer-sidebar-open"
          : "restaura-footer"
      }
    >
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <p className="footer-small-title">
            ✦ &nbsp; A TASTE WORTH REMEMBERING
          </p>

          <h2>Good food. Beautiful moments.</h2>

          <p className="footer-cta-text">
            Join us for an unforgettable dining experience crafted around
            exceptional flavours, warm hospitality and timeless elegance.
          </p>

          <Link to="/menu" className="footer-button">
            Explore Our Menu
            <span>→</span>
          </Link>
        </div>
      </section>

      <div className="footer-main">
        <div className="footer-column footer-brand">
          <Link to="/" className="footer-logo">
            RESTAURA
          </Link>

          <div className="footer-subtitle">
            FINE DINING
          </div>

          <p className="footer-description">
            Thoughtfully crafted dishes, authentic flavours and warm
            hospitality, created for unforgettable moments around the table.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a
              href="mailto:hello@restaura.com"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>

          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/wishlist">Wishlist</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h3>CONTACT</h3>

          <div className="footer-contact">
            <div className="footer-contact-item">
              <span className="footer-icon">⌖</span>

              <p>
                12 Culinary Avenue,
                <br />
                Hyderabad, India
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">⌕</span>

              <p>
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">✉</span>

              <p>
                <a href="mailto:hello@restaura.com">
                  hello@restaura.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3>OPENING HOURS</h3>

          <div className="footer-hours">
            <div className="footer-hours-item">
              <strong>Monday — Friday</strong>
              <span>11:00 AM — 11:00 PM</span>
            </div>

            <div className="footer-hours-item">
              <strong>Saturday — Sunday</strong>
              <span>11:00 AM — 12:00 AM</span>
            </div>
          </div>

          <Link to="/contact" className="footer-touch">
            Get In Touch
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 RESTAURA. ALL RIGHTS RESERVED.
        </p>

        <p className="footer-crafted">
          CRAFTED WITH PASSION
        </p>
      </div>
    </footer>
  );
}

export default Footer;
