import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../componentes/Context/CartContext";
import "../ItemDetail/detail.css";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(item, quantity);
  };

  return (
    <div className="detail">
      <img src={item.image} className="img-fluid" alt={item.title} />
      <div className="detail-content">
        <h2>{item.title}</h2>
        <p> $ {item.price}</p>
        <p>{item.description}</p>
        <p> Cantidad: {item.stock}</p>
        {goToCart ? (
          <Link to="/cart">Terminar compra</Link>
        ) : (
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
