import React from "react";
import "./Header.css";
import CartIcon from "../components/CartIcon";

export default function Header({ cartCount, handleCartClick }) {
  return (
    <div className="header-component">
      <div className="header-title">TeeRex Store</div>
      <div className="header-end">
        <div className="header-product-btn">Products</div>
        <CartIcon count={cartCount} onCartClick={handleCartClick} />
      </div>
    </div>
  );
}
