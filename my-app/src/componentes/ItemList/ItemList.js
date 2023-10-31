import React from "react";
import Items from "../Item/Items";
import "../itemListContainer.css";

const ItemList = ({ item }) => {
  return (
    <div className="row" id="itemlist">
      {item.map((item) => (
        <div className="col-md-3" key={item.id}>
          <Items item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
