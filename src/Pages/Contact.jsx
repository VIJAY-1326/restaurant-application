
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

const viewportSettings = {
  amount: 0.2,
  once: true,
};

const smoothTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const heroContent = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const detailContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const detailCard = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    window.setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <motion.div
          className="contact-hero-content"
          variants={heroContent}
          initial="hidden"
          animate="visible"
          transition={smoothTransition}
        >
          <motion.span
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            WE'D LOVE TO HEAR FROM YOU
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.18,
            }}
          >
            Let's Start a
            <span> Conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            Have a question, suggestion, or simply want to say
            hello? Our team is always happy to hear from you.
          </motion.p>
        </motion.div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <motion.div
            className="contact-info"
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={smoothTransition}
          >
            <motion.div
              className="section-heading"
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={smoothTransition}
            >
              <span>GET IN TOUCH</span>

              <h2>
                We're Here
                <em> For You</em>
              </h2>

              <p>
                Whether you have a question about our menu,
                need help with an order, or want to share your
                experience, feel free to reach out.
              </p>
            </motion.div>

            <motion.div
              className="contact-details"
              variants={detailContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="contact-icon">
                  <MapPin size={21} />
                </div>

                <div className="contact-detail-content">
                  <h3>Visit Us</h3>

                  <p>
                    24 Luxury Avenue
                    <br />
                    Vizianagaram, Andhra Pradesh
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="contact-icon">
                  <Phone size={21} />
                </div>

                <div className="contact-detail-content">
                  <h3>Call Us</h3>

                  <p>
                    +91 98765 43210
                    <br />
                    +91 91234 56789
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="contact-icon">
                  <Mail size={21} />
                </div>

                <div className="contact-detail-content">
                  <h3>Email Us</h3>

                  <p>
                    hello@restaura.com
                    <br />
                    support@restaura.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="contact-icon">
                  <Clock size={21} />
                </div>

                <div className="contact-detail-content">
                  <h3>Opening Hours</h3>

                  <p>
                    Monday - Sunday
                    <br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="contact-social"
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                ...smoothTransition,
                delay: 0.1,
              }}
            >
              <h3>Follow Our Journey</h3>

              <div className="social-links">
                <motion.a
                  href="mailto:hello@restaura.com"
                  aria-label="Email Restaura"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                </motion.a>

                <motion.a
                  href="mailto:support@restaura.com"
                  aria-label="Contact Restaura"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{
              ...smoothTransition,
              delay: 0.1,
            }}
          >
            <motion.div
              className="contact-form-header"
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={smoothTransition}
            >
              <span>SEND A MESSAGE</span>

              <h2>
                Tell Us
                <em> What's On Your Mind</em>
              </h2>

              <p>
                Fill out the form below and our team will get
                back to you as soon as possible.
              </p>
            </motion.div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="contact-success"
                  role="status"
                  initial={{
                    opacity: 0,
                    y: -20,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.98,
                  }}
                  transition={smoothTransition}
                >
                  <motion.div
                    className="success-icon"
                    initial={{
                      scale: 0,
                      rotate: -45,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                  >
                    ✓
                  </motion.div>

                  <div>
                    <strong>
                      Message Sent Successfully!
                    </strong>

                    <p>
                      Thank you for reaching out. We'll get back
                      to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <div className="form-row">
                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="contact-name">
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </motion.div>
              </div>

              <div className="form-row">
                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="contact-phone">
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                className="form-group"
                variants={revealUp}
              >
                <label htmlFor="contact-message">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="contact-submit"
                variants={revealUp}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-content">
          <span>EXPERIENCE RESTAURA</span>

          <h2>
            Great Food,
            <em> Great Moments</em>
          </h2>

          <p>
            We look forward to welcoming you. Visit us and
            make your next meal a memorable experience.
          </p>

          <a
            href="mailto:hello@restaura.com"
            className="contact-cta-button"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
