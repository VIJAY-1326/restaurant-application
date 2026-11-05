import { Link } from "react-router-dom";
import { motion} from "framer-motion";

import {
  Award,
  Heart,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

import "./About.css";
const viewportSettings = {
  amount: 0.5,
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

const valueContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const valueCard = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <motion.div
          className="about-hero-content"
          variants={heroContent}
          initial="hidden"
          animate="visible"
          transition={smoothTransition}
        >
          <motion.span
            className="about-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            OUR STORY
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
            Crafted With
            <span> Passion</span>
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
            A celebration of authentic flavors, premium
            ingredients, and unforgettable dining experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}

      <section className="about-story">

        <motion.div
          className="about-story-image"
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={smoothTransition}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
            alt="Restaura dining experience"
          />
        </motion.div>

        <motion.div
          className="about-story-content"
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={{
            ...smoothTransition,
            delay: 0.1,
          }}
        >
          <span className="about-label">
            WELCOME TO RESTAURA
          </span>

          <h2>
            More Than
            <em> Just Food</em>
          </h2>

          <p>
            Restaura was created with one simple idea —
            great food should bring people together.
          </p>

          <p>
            From carefully selected ingredients to beautifully
            presented dishes, every detail is thoughtfully crafted.
            Our kitchen combines timeless culinary traditions with
            a modern touch.
          </p>

          <p>
            Whether you're joining us for a quiet dinner, a family
            celebration, or a special evening with friends, we want
            every visit to feel memorable.
          </p>

          <Link
            to="/menu"
            className="about-story-button"
          >
            Explore Our Menu
            <ArrowRight size={17} />
          </Link>
        </motion.div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="about-values">

        <motion.div
          className="about-section-heading"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={smoothTransition}
        >
          <span>
            WHAT DEFINES US
          </span>

          <h2>
            Our Core
            <em> Values</em>
          </h2>

          <p>
            The principles behind every dish we serve
            and every experience we create.
          </p>
        </motion.div>

        <motion.div
          className="about-values-grid"
          variants={valueContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >

          {/* VALUE 1 */}

          <motion.div
            className="about-value-card"
            variants={valueCard}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
          >
            <div className="about-value-icon">
              <Heart size={24} />
            </div>

            <h3>
              Made With Love
            </h3>

            <p>
              Every dish is prepared with care, passion,
              and attention to the smallest details.
            </p>
          </motion.div>

          {/* VALUE 2 */}

          <motion.div
            className="about-value-card"
            variants={valueCard}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
          >
            <div className="about-value-icon">
              <Award size={24} />
            </div>

            <h3>
              Premium Quality
            </h3>

            <p>
              We carefully choose quality ingredients to
              ensure every bite delivers exceptional flavor.
            </p>
          </motion.div>

          {/* VALUE 3 */}

          <motion.div
            className="about-value-card"
            variants={valueCard}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
          >
            <div className="about-value-icon">
              <Sparkles size={24} />
            </div>

            <h3>
              Authentic Flavors
            </h3>

            <p>
              Traditional recipes meet thoughtful modern
              techniques for a unique culinary experience.
            </p>
          </motion.div>

          {/* VALUE 4 */}

          <motion.div
            className="about-value-card"
            variants={valueCard}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
          >
            <div className="about-value-icon">
              <Users size={24} />
            </div>

            <h3>
              Our Guests First
            </h3>

            <p>
              Your comfort, happiness, and experience are
              always at the heart of what we do.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section className="about-experience">

        <motion.div
          className="about-experience-content"
          variants={revealScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          transition={smoothTransition}
        >
          <span>
            THE RESTAURA EXPERIENCE
          </span>

          <h2>
            Where Every Meal
            <em> Becomes a Memory</em>
          </h2>

          <p>
            Step into an atmosphere designed for conversations,
            celebrations, and moments worth remembering.
          </p>

          <Link
            to="/contact"
            className="about-experience-button"
          >
            Get In Touch
            <ArrowRight size={17} />
          </Link>
        </motion.div>

      </section>

    </div>
  );
}

export default About;