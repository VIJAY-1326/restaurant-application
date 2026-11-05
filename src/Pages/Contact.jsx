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

/* =========================================================
   ANIMATION SETTINGS
========================================================= */

const viewportSettings = {
  amount: 0.2,
  once: false,
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
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

// eslint-disable-next-line no-unused-vars
const revealScale = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
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

/* =========================================================
   COMPONENT
========================================================= */

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

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

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
              ease: [0.22, 1, 0.36, 1],
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
              ease: [0.22, 1, 0.36, 1],
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Have a question, suggestion, or simply want to say
            hello? Our team is always happy to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          MAIN CONTACT SECTION
      ====================================================== */}

      <section className="contact-section">
        <div className="contact-container">

          {/* =================================================
              LEFT SIDE
          ================================================== */}

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
              <span>
                GET IN TOUCH
              </span>

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

            {/* CONTACT DETAILS */}

            <motion.div
              className="contact-details"
              variants={detailContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >

              {/* ADDRESS */}

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="contact-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3>
                    Visit Us
                  </h3>

                  <p>
                    24 Luxury Avenue
                    <br />
                    Vizianagaram, Andhra Pradesh
                  </p>
                </div>
              </motion.div>

              {/* PHONE */}

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="contact-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <h3>
                    Call Us
                  </h3>

                  <p>
                    +91 98765 43210
                    <br />
                    +91 91234 56789
                  </p>
                </div>
              </motion.div>

              {/* EMAIL */}

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="contact-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <h3>
                    Email Us
                  </h3>

                  <p>
                    hello@restaura.com
                    <br />
                    support@restaura.com
                  </p>
                </div>
              </motion.div>

              {/* HOURS */}

              <motion.div
                className="contact-detail-card"
                variants={detailCard}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="contact-icon">
                  <Clock size={21} />
                </div>

                <div>
                  <h3>
                    Opening Hours
                  </h3>

                  <p>
                    Monday - Sunday
                    <br />
                    11:00 AM - 11:00 PM
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* SOCIAL */}

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
              <h3>
                Follow Our Journey
              </h3>

              <div className="social-links">

                <motion.a
                  href="#"
                  aria-label="Social Media"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <MessageCircle size={20} />
                </motion.a>

                <motion.a
                  href="#"
                  aria-label="Contact Us"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Mail size={20} />
                </motion.a>

              </div>
            </motion.div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================== */}

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
              <span>
                SEND A MESSAGE
              </span>

              <h2>
                Tell Us
                <em> What's On Your Mind</em>
              </h2>

              <p>
                Fill out the form below and our team will get
                back to you as soon as possible.
              </p>
            </motion.div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="contact-success"
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
                      ease: [0.22, 1, 0.36, 1],
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

            {/* =================================================
                FORM
            ================================================== */}

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

              {/* ROW 1 */}

              <div className="form-row">

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

              </div>

              {/* ROW 2 */}

              <div className="form-row">

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  variants={revealUp}
                >
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

              </div>

              {/* MESSAGE */}

              <motion.div
                className="form-group"
                variants={revealUp}
              >
                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              {/* BUTTON */}

              <motion.button
                type="submit"
                className="contact-submit"
                variants={revealUp}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <span>
                  Send Message
                </span>

                <Send size={18} />
              </motion.button>

            </motion.form>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      
    </div>
  );
}

export default Contact;