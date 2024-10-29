import React from "react";
import "./Header.css";
import CartIcon from "../components/CartIcon";

export default function Header({ cartCount }) {
  return (
    <div className="header-component">
      <div className="header-title">TeeRex Store</div>
      <div className="header-end">
        <div className="header-product-btn">
          <a href="/">Products</a>
        </div>
        <a href="/cart">
          <CartIcon count={cartCount} />
        </a>
      </div>
    </div>
  );
}
