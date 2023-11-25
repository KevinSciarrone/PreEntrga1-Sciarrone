import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(parseInt(initial));
  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counter">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          disabled={counter <= 1}
          onClick={decrementarStock}
          className="operacion"
        >
          -
        </button>
        <span>{counter}</span>
        <button
          disabled={counter >= stock}
          onClick={incrementarStock}
          className="operacion"
        >
          +
        </button>
      </div>
      <div>
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(counter)}
          className="operacion"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
