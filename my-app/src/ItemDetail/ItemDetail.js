import React from "react";
import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <img src={item.img} className="img-fluid" alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.detalle}</p>
        <p> $ {item.precio}</p>
        <p>{item.bodega}</p>
        <p>{item.variedad}</p>
        <p>{item.corte}</p>
        <p>{item.alcohol} </p>
        <p> Cantidad: {item.stock}</p>
      </div>
      <div>
        <ItemCount stockItems={10} />
      </div>
    </div>
  );
};

export default ItemDetail;
