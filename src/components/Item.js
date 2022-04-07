import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleAdd() {
    setInCart((inCart) => !inCart)
  }

  const itemClass = inCart ? "in-cart" : ""
  const itemStatus = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} className="add">{itemStatus}</button>
    </li>
  );
}

export default Item;
