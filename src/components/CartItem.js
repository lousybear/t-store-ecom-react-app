import React from "react";
import "./CartItem.css";
import Dropdown from "./Dropdown";

export default function CartItem({
  id,
  productName,
  productPrice,
  imgUrl,
  quantity,
  availableQty,
  onDelete,
  updateQuantity,
}) {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleQtyChange = (id, selectedQty) => {
    updateQuantity(id, selectedQty);
  };
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={imgUrl} alt="" />
      <div className="cart-item-prod-details">
        <p id="productName">{productName}</p>
        <p id="productPrice">Rs {productPrice}</p>
      </div>
      <Dropdown
        id={id}
        quantity={quantity}
        availableQty={availableQty}
        updateQuantity={handleQtyChange}
      />
      <button className="cart-delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
