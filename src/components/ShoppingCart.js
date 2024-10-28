import React, { useContext } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItem";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

export default function ShoppingCart() {
  const { cartItems, deleteItem, changeItemQuantity, totalAmt } =
    useContext(ShoppingCartContext);
  return (
    <div className="shopping-cart-container">
      <p style={{ fontSize: 18, fontWeight: 600 }}>Shopping Cart</p>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div className="shopping-cart-items">
            <CartItem
              id={item.id}
              key={item.id}
              imgUrl={item.imageURL}
              productName={item.name}
              productPrice={item.price}
              quantity={item.quantity}
              availableQty={item.availableQty}
              onDelete={deleteItem}
              updateQuantity={changeItemQuantity}
            />
          </div>
        ))
      ) : (
        <div>Cart is empty!</div>
      )}
      <hr style={{ width: "100vw" }} />
      <div className="shopping-cart-total-amt">Total amount: {totalAmt}</div>
    </div>
  );
}
