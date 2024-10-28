import React, { useContext, useState } from "react";
import "./Products.css";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { useEffect } from "react";

export default function Products({ id, price, imageURL, name, availableQty }) {
  const { addToCart, cartItems } = useContext(ShoppingCartContext);
  const [disableAddToCartBtn, setDisableAddToCartBtn] = useState(false);

  useEffect(() => {
    handleButtonState();
  }, [cartItems]);

  const handleButtonState = () => {
    const itemInCart = cartItems.find((item) => item.id === id);
    const quantityInCart = itemInCart ? itemInCart.quantity : 0;
    if (quantityInCart >= availableQty) {
      setDisableAddToCartBtn(true);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, price, imageURL, name, availableQty });
  };

  return (
    <div>
      <div className="card-component">
        <img className="card-item-img" alt="" src={imageURL} />
        <div className="card-item-name">{name}</div>
        <div className="card-bottom-bar">
          <div className="card-price-tag">Rs {price}</div>
          <button
            onClick={handleAddToCart}
            className="card-cart-btn"
            disabled={disableAddToCartBtn}
          >
            {!disableAddToCartBtn ? "Add to cart" : "Max quantity"}
          </button>
        </div>
      </div>
    </div>
  );
}