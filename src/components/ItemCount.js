import React, { useState } from "react";

function ItemCount(props) {
    let stock = props.stock;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
      if (count === stock) {
          return;
      } {
    setCount(count + 1);
      }
  };

  const handleDecrement = () => {
    if (count === 0) {
        return;
    } {
  setCount(count - 1);
    };}

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>El contador es {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Resetear</button>
    </div>
  );
}

export default ItemCount;
