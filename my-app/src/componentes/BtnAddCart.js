import { useState } from "react";
import "../componentes/btnAddCart.css";

const BtnAddCart = () => {
  const [btn, setBtn] = useState(0);

  return (
    <div className="btnAdd">
      <button onClick={() => setBtn(btn + 1)}> + </button>
      <h6>{btn}</h6>
      <button onClick={() => setBtn(btn - 1)}> - </button>
    </div>
  );
};

export default BtnAddCart;
