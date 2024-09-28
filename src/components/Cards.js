import React from "react";
import "./Cards.css";

export default function Cards({ price, imageURL }) {
  return (
    <div>
      <div className="card-component">
        <img className="card-item-img" alt="" src={imageURL} />
        <div className="card-bottom-bar">
          <div className="card-price-tag">Rs {price}</div>
          <button className="card-cart-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
