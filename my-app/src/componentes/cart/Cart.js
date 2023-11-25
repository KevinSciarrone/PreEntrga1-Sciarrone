import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../itemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.find((items) => (
        <ItemCart key={items.id} items={items} />
      ))}
      <p>total: $ {totalPrice()}</p>

      <Link to="/checkout">
        {" "}
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </>
  );
};

export default Cart;
