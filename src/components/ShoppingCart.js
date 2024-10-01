import React from "react";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  return (
    <div>
      <p>Shopping Cart</p>
      <div>
        <CartItem productName={"Pink Tshirt"} productPrice={250} quantity={2} />
      </div>
    </div>
  );
}
