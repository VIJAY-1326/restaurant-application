import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Sparkles,
  Utensils,
  Leaf,
  Heart,
} from "lucide-react";

import "./Home.css";


/* =========================================================
   ANIMATION SETTINGS
   ========================================================= */

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 55,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};


const leftReveal = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};


const rightReveal = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};


const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,
  },
};


const cardContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


const cardItem = {
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   VIEWPORT SETTINGS

   amount: 0.2 = section lo 20% viewport lo visible
   once: false = scroll up/down ayinappudu malli animate
   ========================================================= */

const viewportSettings = {
  amount: 0.2,
  once: false,
};


/* =========================================================
   TRANSITION
   ========================================================= */

const sectionTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};


/* =========================================================
   HOME
   ========================================================= */

function Home() {

  const featuredFoods = [
    {
      name: "Royal Chicken Biryani",
      category: "Signature",
      price: "₹320",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    },

    {
      name: "Paneer Tikka",
      category: "Chef's Choice",
      price: "₹240",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
    },

    {
      name: "Margherita Pizza",
      category: "Classic",
      price: "₹280",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    },
  ];


  const experiences = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      text: "Carefully selected ingredients for every plate.",
    },

    {
      icon: Utensils,
      title: "Crafted Daily",
      text: "Every dish is prepared fresh with attention to detail.",
    },

    {
      icon: Sparkles,
      title: "Authentic Flavors",
      text: "Traditional flavors with a refined modern touch.",
    },

    {
      icon: Heart,
      title: "Made With Love",
      text: "Because memorable food begins with passion.",
    },
  ];


  return (
    <div className="home-page">


      {/* =====================================================
          HERO
          NO SCROLL ANIMATION
      ===================================================== */}

      <section className="home-hero">

        <div className="hero-background" />

        <div className="hero-overlay" />


        <div className="hero-content">

          <div className="hero-eyebrow">

            <span className="hero-line" />

            <span>
              EST. 2026 · PREMIUM DINING
            </span>

            <span className="hero-line" />

          </div>


          <p className="hero-kicker">
            WELCOME TO RESTAURA
          </p>


          <h1>
            Where Every
            <br />
            <em>Bite</em> Tells a Story.
          </h1>


          <p className="hero-description">
            Experience thoughtfully crafted dishes, authentic
            flavors and warm hospitality in an atmosphere
            designed for unforgettable moments.
          </p>


          <div className="hero-actions">

            <Link
              to="/menu"
              className="hero-primary-button"
            >
              Explore Menu

              <ArrowRight size={17} />
            </Link>


            <Link
              to="/about"
              className="hero-secondary-button"
            >
              Our Story
            </Link>

          </div>


          <div className="hero-rating">

            <div className="rating-stars">

              <Star
                size={13}
                fill="currentColor"
              />

              <Star
                size={13}
                fill="currentColor"
              />

              <Star
                size={13}
                fill="currentColor"
              />

              <Star
                size={13}
                fill="currentColor"
              />

              <Star
                size={13}
                fill="currentColor"
              />

            </div>


            <span>
              4.9
            </span>


            <small>
              · Loved by food lovers
            </small>

          </div>

        </div>


        <div className="hero-scroll">

          <span>
            SCROLL TO DISCOVER
          </span>

          <div className="scroll-line" />

        </div>

      </section>



      {/* =====================================================
          INTRO
      ===================================================== */}

      <motion.section
        className="home-intro"

        variants={sectionReveal}

        initial="hidden"

        whileInView="visible"

        viewport={viewportSettings}

        transition={sectionTransition}
      >

        <div className="intro-label">

          <span>
            01
          </span>

          <div />

          <span>
            THE RESTAURA EXPERIENCE
          </span>

        </div>


        <div className="intro-grid">


          {/* LEFT */}

          <motion.div
            className="intro-heading"

            variants={leftReveal}

            initial="hidden"

            whileInView="visible"

            viewport={viewportSettings}

            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p>
              MORE THAN JUST FOOD
            </p>


            <h2>
              A table full of
              <br />
              <em>memories.</em>
            </h2>

          </motion.div>



          {/* RIGHT */}

          <motion.div
            className="intro-text"

            variants={rightReveal}

            initial="hidden"

            whileInView="visible"

            viewport={viewportSettings}

            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p>
              At Restaura, we believe dining should be more than
              simply satisfying hunger. It should be an experience
              that stays with you.
            </p>


            <p>
              From carefully sourced ingredients to the final
              presentation, every detail is thoughtfully considered
              to bring you food worth remembering.
            </p>


            <Link
              to="/about"
              className="text-link"
            >
              Discover our story

              <ArrowRight size={15} />
            </Link>

          </motion.div>

        </div>

      </motion.section>



      {/* =====================================================
          FEATURED
      ===================================================== */}

      <motion.section
        className="featured-section"

        variants={sectionReveal}

        initial="hidden"

        whileInView="visible"

        viewport={viewportSettings}

        transition={sectionTransition}
      >

        <motion.div
          className="section-heading"

          variants={sectionReveal}

          initial="hidden"

          whileInView="visible"

          viewport={viewportSettings}

          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div>

            <span className="section-eyebrow">
              FROM OUR KITCHEN
            </span>


            <h2>
              Signature <em>Selections</em>
            </h2>

          </div>


          <Link
            to="/menu"
            className="view-menu-link"
          >
            View Full Menu

            <ArrowRight size={15} />
          </Link>

        </motion.div>



        {/* FEATURED CARDS */}

        <motion.div
          className="featured-grid"

          variants={cardContainer}

          initial="hidden"

          whileInView="visible"

          viewport={viewportSettings}
        >

          {featuredFoods.map((food) => (

            <motion.article
              className="featured-card"

              key={food.name}

              variants={cardItem}
            >

              <div className="featured-image">

                <img
                  src={food.image}
                  alt={food.name}
                />

                <div className="featured-image-overlay" />


                <span className="featured-tag">
                  {food.category}
                </span>


                <div className="featured-rating">

                  <Star
                    size={12}
                    fill="currentColor"
                  />

                  {food.rating}

                </div>

              </div>


              <div className="featured-content">

                <h3>
                  {food.name}
                </h3>


                <div className="featured-bottom">

                  <span>
                    Chef's selection
                  </span>


                  <strong>
                    {food.price}
                  </strong>

                </div>

              </div>

            </motion.article>

          ))}

        </motion.div>

      </motion.section>



      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <motion.section
        className="experience-section"

        initial="hidden"

        whileInView="visible"

        viewport={viewportSettings}

        variants={sectionReveal}

        transition={sectionTransition}
      >

        <motion.div
          className="experience-header"

          initial="hidden"

          whileInView="visible"

          viewport={viewportSettings}

          variants={sectionReveal}

          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-eyebrow">
            WHY RESTAURA
          </span>


          <h2>
            Crafted with <em>intention.</em>
          </h2>


          <p>
            Every element of your dining experience is designed
            with care — from the ingredients we choose to the
            moments we create around the table.
          </p>

        </motion.div>



        {/* EXPERIENCE CARDS */}

        <motion.div
          className="experience-grid"

          variants={cardContainer}

          initial="hidden"

          whileInView="visible"

          viewport={viewportSettings}
        >

          {experiences.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div
                className="experience-card"

                key={item.title}

                variants={cardItem}
              >

                <div className="experience-number">
                  0{index + 1}
                </div>


                <div className="experience-icon">

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                  />

                </div>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </motion.div>

      </motion.section>



      {/* =====================================================
          STORY
      ===================================================== */}

      <motion.section
        className="home-story"

        initial="hidden"

        whileInView="visible"

        viewport={viewportSettings}

        variants={sectionReveal}

        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >


        {/* IMAGE */}

        <motion.div
          className="story-image"

          initial={{
            opacity: 0,
            x: -70,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={viewportSettings}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <img
            src="https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2023/05/how-to-design-restaurant-interior-help-3d-3-1220x671.jpg"
            alt="Restaura dining experience"
          />

        </motion.div>



        {/* CONTENT */}

        <motion.div
          className="story-content"

          initial="hidden"

          whileInView="visible"

          viewport={viewportSettings}

          variants={rightReveal}

          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-eyebrow">
            OUR PHILOSOPHY
          </span>


          <h2>
            Simple ingredients.
            <br />
            <em>Extraordinary moments.</em>
          </h2>


          <p>
            We don't believe great food needs to be complicated.
            The finest ingredients, honest cooking and a little
            creativity can turn an ordinary meal into something
            truly special.
          </p>


          <Link
            to="/about"
            className="story-button"
          >
            Discover Restaura

            <ArrowRight size={16} />
          </Link>

        </motion.div>

      </motion.section>



      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.section
        className="home-cta"

        initial="hidden"

        whileInView="visible"

        viewport={viewportSettings}

        variants={scaleReveal}

        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        <div
          className="cta-decoration cta-decoration-one"
        />

        <div
          className="cta-decoration cta-decoration-two"
        />


        <motion.div
          className="cta-content"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={viewportSettings}

          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="section-eyebrow">
            YOUR TABLE AWAITS
          </span>


          <h2>
            Make tonight
            <br />
            <em>delicious</em>
          </h2>


          <p>
            Discover flavors worth coming back for.
          </p>


          <Link
            to="/menu"
            className="cta-button"
          >
            Explore Our Menu

            <ArrowRight size={17} />
          </Link>

        </motion.div>

      </motion.section>


    </div>
  );
}


export default Home;