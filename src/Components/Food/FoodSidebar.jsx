import {
  Search,
  ChevronRight,
  Funnel,
  Leaf,
  Drumstick,
} from "lucide-react";

import "./FoodSidebar.css";
// framer-motion


function FoodSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  foodType,
  setFoodType,
}) {
  return (
    <aside className="food-sidebar">

      {/* SEARCH */}
      <div className="sidebar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>


      {/* MENU CATEGORIES */}
      <div className="sidebar-section">

        <div className="sidebar-title">
          <span>MENU</span>
        </div>

        <div className="category-list">

          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                selectedCategory === category
                  ? "category-item active"
                  : "category-item"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              <span>{category}</span>

              <ChevronRight size={16} />
            </button>
          ))}

        </div>

      </div>


      {/* DIVIDER */}
      <div className="sidebar-divider" />


      {/* FILTERS */}
      <div className="sidebar-section">

        <div className="sidebar-heading">
          <Funnel size={16} />
          <span>FILTERS</span>
        </div>


        {/* FOOD TYPE */}
        <div className="filter-group">

          <h4>Food Type</h4>


          {/* ALL */}
          <label className="filter-option">

            <input
              type="radio"
              name="foodType"
              checked={foodType === "ALL"}
              onChange={() =>
                setFoodType("ALL")
              }
            />

            <span className="custom-radio" />

            <span>All Items</span>

          </label>


          {/* VEGETARIAN */}
          <label className="filter-option">

            <input
              type="radio"
              name="foodType"
              checked={foodType === "VEG"}
              onChange={() =>
                setFoodType("VEG")
              }
            />

            <span className="custom-radio veg" />

            <Leaf size={14} />

            <span>Vegetarian</span>

          </label>


          {/* NON VEGETARIAN */}
          <label className="filter-option">

            <input
              type="radio"
              name="foodType"
              checked={foodType === "NON_VEG"}
              onChange={() =>
                setFoodType("NON_VEG")
              }
            />

            <span className="custom-radio nonveg" />

            <Drumstick size={14} />

            <span>Non-Vegetarian</span>

          </label>

        </div>

      </div>

    </aside>
  );
}

export default FoodSidebar;
