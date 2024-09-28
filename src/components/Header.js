import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-component">
      <div className="header-title">TeeRex Store</div>
      <div className="header-end">
        <div className="header-product-btn">Products</div>
        <button className="header-cart-btn">Cart</button>
      </div>
    </div>
  );
}
