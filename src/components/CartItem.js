import React from "react";
import "./CartItem.css";
import Dropdown from "./Dropdown";

export default function CartItem({
  productName,
  productPrice,
  imgUrl,
  quantity,
}) {
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={imgUrl} alt="" />
      <div className="cart-item-prod-details">
        <p id="productName">{productName}</p>
        <p id="productPrice">Rs {productPrice}</p>
      </div>
      <Dropdown selectedQty={quantity} availableQty={quantity} />
      <button className="cart-delete-btn">Delete</button>
    </div>
  );
}
