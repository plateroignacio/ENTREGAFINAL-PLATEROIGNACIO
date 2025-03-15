import React from "react";
import { Link } from "react-router-dom";
import CartWidget from '../Cartwidget/CartWidget'; 

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Mi Tienda</Link>
      </div>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/category/ps5">PS5</Link>
        <Link to="/category/xbox">Xbox</Link>
        <Link to="/category/pc">PC</Link>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
