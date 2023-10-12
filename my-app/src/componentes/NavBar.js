import React from "react";
import "./CartWidget.js";
import CartWidget from "./CartWidget.js";

function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button className="navbar-brand" href="#">
            El Rincón de las Copas
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Productos
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" href="">
                  Cervezas
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" href="#">
                  Vinos
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" href="#">
                  Espumante
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" href="#">
                  <CartWidget />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
