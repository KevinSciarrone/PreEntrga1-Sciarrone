import React from "react";
import "./itemCart.css";

const ItemCart = ({ item, removeItem }) => {
  return (
    <div className="itemCart">
      <img src={item.image} alt={item.title} />
      <div>
        <p>Título: {item.title}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: $ {item.price}</p>
        <p>Subtotal: $ {item.quantity * item.price}</p>
        <button onClick={() => removeItem(item.id)}>
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
