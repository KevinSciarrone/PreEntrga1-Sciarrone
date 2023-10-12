import React from "react";
import BtnAddCart from "../componentes/BtnAddCart.js";
import "../componentes/itemListContainer.css";

function ItemListContainer({ nombre, img, precio, detalle, btn }) {
  return (
    <div className="product">
      <h4 className="nameProduct">{nombre} </h4>
      <img className="imgProduct" src={img} alt={nombre} />
      <p>{precio} </p>
      <p>{detalle} </p>
      <BtnAddCart />
    </div>
  );
}

export default ItemListContainer;
