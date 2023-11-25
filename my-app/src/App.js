import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetaliContainer";
import Error404 from "./componentes/Error404";
import CartProvider from "./componentes/Context/CartContext";
import { Checkout } from "./componentes/chekcout/Chekcout";
import Cart from "../src/componentes/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
