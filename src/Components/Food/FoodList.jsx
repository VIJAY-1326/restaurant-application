import FoodCard from "./FoodCard";
// framer-motion


function FoodList({ foods }) {
  if (foods.length === 0) {
    return (
      <div className="empty-foods">

        <h3>
          No dishes found
        </h3>

        <p>
          Try another category or search term.
        </p>

      </div>
    );
  }

  return (
    <div className="menu-food-grid">

      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}

    </div>
  );
}

export default FoodList;