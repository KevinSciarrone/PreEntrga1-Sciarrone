import React from "react";
import "../componentes/itemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../json/productos.json";
import ItemList from "./ItemList/ItemList.js";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              id ? productos.filter((item) => item.categoria === id) : productos
            );
          }, 2000);
        });
        setItem(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container product">
      <div className="row">
        <ItemList item={item} className="nameProduct" />
      </div>
    </div>
  );
};

export default ItemListContainer;
