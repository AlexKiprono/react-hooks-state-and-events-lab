import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle whether the item is in the cart
  const toggleCartStatus = () => {
    setIsInCart(!isInCart);
  };

  // Determine the button text based on whether the item is in the cart
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Toggle button text based on cart status */}
      <button className="add" onClick={toggleCartStatus}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
