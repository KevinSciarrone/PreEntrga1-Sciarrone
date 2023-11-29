import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const queryDb = getFirestore();
      const queryDoc = doc(queryDb, "items", id);
      const docSnapshot = await getDoc(queryDoc);

      if (docSnapshot.exists()) {
        const itemData = { id: docSnapshot.id, ...docSnapshot.data() };
        console.log("ItemDetailContainer itemData:", itemData);
        setItem(itemData);
      } else {
        console.log("No se encontró el elemento en la base de datos.");
      }
    };
    fetchItem();
  }, [id]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
