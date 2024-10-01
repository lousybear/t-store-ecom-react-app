import React from "react";
import CartItem from "./CartItem";

export default function ShoppingCart({ items }) {
  return (
    <div className="shopping-cart-container">
      <p style={{ fontSize: 18, fontWeight: 600 }}>Shopping Cart</p>
      {items.length ? (
        items.map((item) => (
          <div className="shopping-cart-items">
            <CartItem
              imgUrl={item.imageURL}
              productName={item.name}
              productPrice={item.price}
              quantity={2}
            />
          </div>
        ))
      ) : (
        <div>Cart is empty!</div>
      )}
    </div>
  );
}
