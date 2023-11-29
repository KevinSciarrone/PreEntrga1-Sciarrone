import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import "../chekcout/chekcout.css";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { cart, removeItem, totalPrice } = useCartContext();

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden");
      return;
    }
    const total = totalPrice();
    const orden = {
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.title,
        cantidad: item.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (itemOrden) => {
        const db = getFirestore();
        const itemRef = doc(db, "items", itemOrden.id);

        const itemDoc = await getDoc(itemRef);
        const stockActual = itemDoc.data().stock;

        await updateDoc(itemRef, {
          stock: stockActual - itemOrden.cantidad,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            removeItem();
          })
          .catch((error) => {
            console.log("Error en creacon de orden", error);
            setError("Error en orden");
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se actualizo el stock");
      });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
  };

  return (
    <>
      <h2 className="info">
        Rellena el formulario y nos contactaremos para enviar sus productos
      </h2>

      <form onSubmit={manejadorFormulario}>
        {cart.map((item) => (
          <div className="item-check" key={item.id}>
            <p>
              {" "}
              {item.nombre} {item.cantidad}
            </p>
            <p> {item.precio} </p>
          </div>
        ))}

        <div className="form-group">
          <label className="lab-check">Nombre</label>
          <input
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Apellido</label>
          <input
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Telefono</label>
          <input
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Email</label>
          <input
            className="input-check"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="lab-check">Email Confirmacion</label>
          <input
            className="input-check"
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p className="error-campos">{error}</p>}

        {ordenId && (
          <p className="orden">
            ¡Gracias por tu compra! <br /> Este es tu numero de orden: <br />{" "}
            {ordenId}{" "}
          </p>
        )}

        <div className="checking">
          <button className="check-bt" type="submit">
            Finalizar Compra
          </button>
        </div>
        <br />
        <div>
          <Link to="/">
            <button className="back-to-home">Volver al Home</button>
          </Link>
        </div>
      </form>
    </>
  );
};
