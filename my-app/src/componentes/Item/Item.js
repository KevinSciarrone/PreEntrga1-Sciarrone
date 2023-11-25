import React from "react";
import { Link } from "react-router-dom";
import "../itemListContainer.css";

const Item = ({ item }) => {
  return (
    <div className="container">
      <div className="card border border-0 product">
        <img src={item.image} className="card-img-top " alt={item.title} />
        <div className="card-body text-center">
          <p className="card-text">{item.title}</p>
          <p className="card-text">$ {item.price}</p>
        </div>
        <Link to={"/item/" + item.id} className="text-decoration-none">
          <button>Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
