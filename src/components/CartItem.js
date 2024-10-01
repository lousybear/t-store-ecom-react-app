import React from "react";

export default function CartItem({
  productName,
  productPrice,
  imgUrl,
  quantity,
}) {
  return (
    <div className="cart-item-container">
      <img className="cart-item-img" src={imgUrl} alt="" />
      <div>
        <p>{productName}</p>
        <p>{productPrice}</p>
      </div>
      <input type="number" name="quantity" value={quantity} />
      <button>Delete</button>
    </div>
  );
}
