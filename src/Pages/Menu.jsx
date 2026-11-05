import { useEffect, useMemo, useState } from "react";
import {
  Search,
  X,
  Heart,
  ShoppingBag,
  Star,
  Plus,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useSidebar } from "../Context/SidebarContext";

import "./Menu.css";

const revealUp = {
  hidden: { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0 },
};

const revealScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const cardItem = {
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const smoothTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};



/* =========================================================
   MENU DATA
========================================================= */

const menuItems = [
  {
    id: 1,
    name: "Royal Chicken Biryani",
    type: "NON_VEG",
    category: "Rice",
    price: 320,
    rating: 4.9,
    description:
      "Fragrant basmati rice, tender chicken and aromatic royal spices.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "Mutton Dum Biryani",
    type: "NON_VEG",
    category: "Rice",
    price: 390,
    rating: 4.9,
    description:
      "Slow-cooked mutton layered with fragrant basmati and saffron.",
    image:
      "https://artofpalate.com/wp-content/uploads/2020/06/mutton-biryani.jpg",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    type: "VEG",
    category: "Starters",
    price: 240,
    rating: 4.8,
    description:
      "Char-grilled cottage cheese with peppers and smoky spices.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Chicken 65",
    type: "NON_VEG",
    category: "Starters",
    price: 260,
    rating: 4.8,
    description:
      "Crispy southern-style chicken tossed with curry leaves and spices.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "Creamy Tomato Soup",
    type: "VEG",
    category: "Soups",
    price: 180,
    rating: 4.7,
    description:
      "Slow-simmered tomatoes blended with cream and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Margherita Pizza",
    type: "VEG",
    category: "Pizza",
    price: 280,
    rating: 4.8,
    description:
      "Classic tomato, mozzarella and basil on a crisp artisan crust.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "Truffle Mushroom Pizza",
    type: "VEG",
    category: "Pizza",
    price: 390,
    rating: 4.9,
    description:
      "Wild mushrooms, mozzarella and delicate truffle oil.",
    image:
      "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "Classic Hakka Noodles",
    type: "VEG",
    category: "Noodles",
    price: 230,
    rating: 4.7,
    description:
      "Wok-tossed noodles with vegetables and aromatic sauces.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 9,
    name: "Butter Naan",
    type: "VEG",
    category: "Breads",
    price: 70,
    rating: 4.8,
    description:
      "Soft tandoor-baked naan finished with cultured butter.",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 10,
    name: "Garlic Naan",
    type: "VEG",
    category: "Breads",
    price: 90,
    rating: 4.8,
    description:
      "Hand-stretched naan topped with garlic, herbs and butter.",
    image:
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 11,
    name: "Butter Chicken",
    type: "NON_VEG",
    category: "Curries",
    price: 340,
    rating: 4.9,
    description:
      "Tender chicken in a rich tomato, butter and cream gravy.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    type: "VEG",
    category: "Curries",
    price: 290,
    rating: 4.8,
    description:
      "Soft paneer simmered in a rich tomato and cashew gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 13,
    name: "Classic Tiramisu",
    type: "VEG",
    category: "Desserts",
    price: 249,
    rating: 4.9,
    description:
      "Mascarpone cream, espresso-soaked ladyfingers and cocoa.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 14,
    name: "Chocolate Fondant",
    type: "VEG",
    category: "Desserts",
    price: 299,
    rating: 4.8,
    description:
      "Warm dark chocolate cake with a rich molten centre.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 15,
    name: "Classic Espresso",
    type: "VEG",
    category: "Drinks",
    price: 149,
    rating: 4.7,
    description:
      "Rich Italian espresso with a smooth aromatic finish.",
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 16,
    name: "Signature Berry Cooler",
    type: "VEG",
    category: "Drinks",
    price: 229,
    rating: 4.8,
    description:
      "Fresh berries, citrus and sparkling water.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
  },
];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All Items",
  "Rice Items",
  "Starters",
  "Soups",
  "Pizza",
  "Noodles",
  "Breads",
  "Curries",
  "Desserts",
  "Beverages",
];


const categoryMap = {
  "All Items": "All",
  "Rice Items": "Rice",
  Starters: "Starters",
  Soups: "Soups",
  Pizza: "Pizza",
  Noodles: "Noodles",
  Breads: "Breads",
  Curries: "Curries",
  Desserts: "Desserts",
  Beverages: "Drinks",
};


/* =========================================================
   COMPONENT
========================================================= */

function Menu() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const {
    addToCart,
    cartCount,
  } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
    wishlistCount,
  } = useWishlist();

  const {
    sidebarOpen,
    toggleSidebar,
  } = useSidebar();


  /* =======================================================
     STATE
  ======================================================= */

  const urlSearch =
    searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] =
    useState(urlSearch);

  const [selectedCategory, setSelectedCategory] =
    useState("All Items");

  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);


  /* =======================================================
     SYNC URL SEARCH
  ======================================================= */

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchQuery(urlSearch);
  }, [urlSearch]);


  /* =======================================================
     SEARCH
  ======================================================= */

  const handleSearchChange = (event) => {
    const value = event.target.value;

    setSearchQuery(value);

    const trimmedValue =
      value.trim();

    if (!trimmedValue) {
      setSearchParams(
        {},
        { replace: true }
      );

      return;
    }

    setSearchParams(
      {
        search: trimmedValue,
      },
      {
        replace: true,
      }
    );
  };


  const clearSearch = () => {
    setSearchQuery("");

    setSearchParams(
      {},
      { replace: true }
    );
  };


  /* =======================================================
     FILTER
  ======================================================= */

  const filteredItems = useMemo(() => {
    const normalizedSearch =
      searchQuery
        .trim()
        .toLowerCase();

    const mappedCategory =
      categoryMap[selectedCategory];

    return menuItems.filter((item) => {
      const matchesCategory =
        mappedCategory === "All" ||
        item.category === mappedCategory;

      const matchesSearch =
        !normalizedSearch ||
        item.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        item.description
          .toLowerCase()
          .includes(normalizedSearch) ||
        item.category
          .toLowerCase()
          .includes(normalizedSearch);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    selectedCategory,
    searchQuery,
  ]);


  /* =======================================================
     CATEGORY
  ======================================================= */

  const handleCategoryChange = (
    category
  ) => {
    setSelectedCategory(category);
    setMobileFiltersOpen(false);
  };


  return (
    <div className="menu-page">

      {/* =====================================================
          DESKTOP SIDEBAR
      ====================================================== */}

      <motion.aside
        className={`menu-sidebar ${
          sidebarOpen
            ? "menu-sidebar-open"
            : "menu-sidebar-closed"
        }`}
        initial={false}
        animate={{ x: sidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: "transform" }}
      >

        <div className="menu-sidebar-inner">

          {/* SEARCH */}

          <div className="menu-sidebar-search">

            <Search size={17} />

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search dishes..."
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}

          </div>


          {/* MENU LABEL */}

          <div className="menu-sidebar-label">

            <span>MENU</span>

            <div />

          </div>


          {/* CATEGORIES */}

          <div className="menu-category-list">

            {categories.map(
              (category) => {

                const active =
                  selectedCategory ===
                  category;

                return (
                  <button
                    key={category}
                    type="button"
                    className={
                      active
                        ? "menu-category active"
                        : "menu-category"
                    }
                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                  >

                    <span>
                      {category}
                    </span>

                    <ChevronRight
                      size={14}
                    />

                  </button>
                );
              }
            )}

          </div>


          {/* SIDEBAR FOOTER */}

          <div className="menu-sidebar-footer">

            <span>
              {filteredItems.length}
              {" "}
              dishes available
            </span>

            <span className="menu-sidebar-dot" />

          </div>

        </div>

      </motion.aside>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main
        className={
          sidebarOpen
            ? "menu-main menu-main-sidebar-open"
            : "menu-main"
        }
      >

        {/* ===================================================
            TOP BAR
        ==================================================== */}

        <motion.div
          className="menu-topbar"
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={smoothTransition}
        >

          <div>

            <span className="menu-top-eyebrow">
              RESTAURA · FINE DINING
            </span>

            <h1>
              Discover Our{" "}
              <em>Menu</em>
            </h1>

          </div>


          <div className="menu-top-actions">

            <button
              type="button"
              className="mobile-filter-button"
              onClick={() =>
                setMobileFiltersOpen(true)
              }
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>


            <button
              type="button"
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label={
                sidebarOpen
                  ? "Close sidebar"
                  : "Open sidebar"
              }
            >
              <SlidersHorizontal
                size={16}
              />

              <span>
                {sidebarOpen
                  ? "Hide Filters"
                  : "Show Filters"}
              </span>
            </button>


            <div className="menu-counts">

              <div className="menu-count">
                <Heart size={15} />
                <span>
                  {wishlistCount}
                </span>
              </div>

              <div className="menu-count">
                <ShoppingBag size={15} />
                <span>
                  {cartCount}
                </span>
              </div>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            SEARCH AREA
        ==================================================== */}

        <motion.div
          className="menu-search-area"
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ ...smoothTransition, delay: 0.05 }}
        >

          <div className="menu-main-search">

            <Search size={18} />

            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by dish, category or flavour..."
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="menu-search-clear"
              >
                <X size={16} />
              </button>
            )}

          </div>

        </motion.div>


        {/* ===================================================
            RESULT INFO
        ==================================================== */}

        <motion.div
          className="menu-result-bar"
          variants={revealUp}
          initial="hidden"
          animate="visible"
          transition={{ ...smoothTransition, delay: 0.08 }}
        >

          <div>

            <span>
              Showing
            </span>

            <strong>
              {filteredItems.length}
            </strong>

            <span>
              {filteredItems.length === 1
                ? "dish"
                : "dishes"}
            </span>

            {searchQuery && (
              <span className="search-result-text">
                for "
                {searchQuery}
                "
              </span>
            )}

          </div>

          {selectedCategory !==
            "All Items" && (
            <button
              type="button"
              onClick={() =>
                setSelectedCategory(
                  "All Items"
                )
              }
              className="clear-category"
            >
              Clear category
              <X size={13} />
            </button>
          )}

        </motion.div>


        {/* ===================================================
            FOOD GRID
        ==================================================== */}

        {filteredItems.length > 0 ? (

          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            className="menu-grid"
            variants={cardContainer}
            initial="hidden"
            animate="visible"
          >

            {filteredItems.map(
              (item) => {

                const liked =
                  isInWishlist(item.id);

                return (
                  <motion.article
                    className="menu-card"
                    key={item.id}
                    variants={cardItem}
                    whileHover={{ y: -7 }}
                  >

                    {/* IMAGE */}

                    <div className="menu-card-image">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading={item.id <= 6 ? "eager" : "lazy"}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85";
                        }}
                      />

                      <div className="menu-card-overlay" />


                      {/* CATEGORY */}

                      <span className="menu-card-category">
                        {item.category}
                      </span>


                      {/* WISHLIST */}

                      <button
                        type="button"
                        className={
                          liked
                            ? "menu-wishlist liked"
                            : "menu-wishlist"
                        }
                        onClick={() =>
                          toggleWishlist(item)
                        }
                        aria-label={
                          liked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart
                          size={17}
                          fill={
                            liked
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>


                      {/* RATING */}

                      <div className="menu-rating">

                        <Star
                          size={12}
                          fill="currentColor"
                        />

                        <span>
                          {item.rating}
                        </span>

                      </div>

                    </div>


                    {/* CONTENT */}

                    <div className="menu-card-content">

                      <h2>
                        {item.name}
                      </h2>

                      <p>
                        {item.description}
                      </p>


                      <div className="menu-card-bottom">

                        <div>
                          <span>
                            Price
                          </span>

                          <strong>
                            ₹{item.price}
                          </strong>
                        </div>


                        <button
                          type="button"
                          className="add-cart-button"
                          onClick={() =>
                            addToCart(item)
                          }
                        >
                          <Plus size={16} />
                          Add
                        </button>

                      </div>

                    </div>

                  </motion.article>
                );
              }
            )}

          </motion.div>

        ) : (

          /* =================================================
             NO RESULTS
          ================================================== */

          <motion.div
            className="menu-empty"
            variants={revealScale}
            initial="hidden"
            animate="visible"
            transition={smoothTransition}
          >

            <div className="menu-empty-icon">
              <Search size={25} />
            </div>

            <h2>
              No dishes found
            </h2>

            <p>
              We couldn't find anything
              matching "
              <strong>
                {searchQuery}
              </strong>
              ".
            </p>

            <button
              type="button"
              onClick={() => {
                clearSearch();
                setSelectedCategory(
                  "All Items"
                );
              }}
            >
              View All Dishes
            </button>

          </motion.div>

        )}

      </main>


      {/* =====================================================
          MOBILE FILTER PANEL
      ====================================================== */}

      <AnimatePresence>
        {mobileFiltersOpen && (

          <motion.div
            className="mobile-filter-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="mobile-filter-panel"
              initial={{ y: 35, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 25, opacity: 0, scale: 0.98 }}
              transition={smoothTransition}
            >

            <div className="mobile-filter-header">

              <div>

                <span>
                  RESTAURA
                </span>

                <h2>
                  Categories
                </h2>

              </div>

              <button
                type="button"
                onClick={() =>
                  setMobileFiltersOpen(false)
                }
              >
                <X size={19} />
              </button>

            </div>


            <div className="mobile-category-grid">

              {categories.map(
                (category) => {

                  const active =
                    selectedCategory ===
                    category;

                  return (
                    <button
                      type="button"
                      key={category}
                      className={
                        active
                          ? "mobile-category active"
                          : "mobile-category"
                      }
                      onClick={() =>
                        handleCategoryChange(
                          category
                        )
                      }
                    >
                      {category}
                    </button>
                  );
                }
              )}

            </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  );
}

export default Menu;