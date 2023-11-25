import React from "react";
import "../CartWidget.js";
import CartWidget from "../CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import "../itemListContainer.css";

const NavBar = () => {
  return (
    <div className=" nav" id="navbar">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src="https://previews.123rf.com/images/benidict83/benidict832011/benidict83201100045/159491387-tienda-de-licores-botella-de-whisky-ron-o-brandy.jpg"
                  alt="liquori l'ubriaco"
                  width={100}
                />
              </Link>
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
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={"/category/cervezas"}
                    >
                      Cervezas
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/vinos"}>
                      Vinos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/whisky"}>
                      Whisky
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-6 d-flex justify-content-end  align-items-center">
          <Link className="nav-link" to="/cart">
            <CartWidget className="cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
