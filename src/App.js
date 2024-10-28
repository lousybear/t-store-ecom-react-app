import { useState } from "react";
import "./App.css";
import Home from "./containers/Home";
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const changeItemQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
      );
    });
  };

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmt = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <ShoppingCartContext.Provider
        value={{
          cartItems,
          addToCart,
          totalCount,
          totalAmt,
          deleteItem,
          changeItemQuantity,
        }}
      >
        <Home />
      </ShoppingCartContext.Provider>
    </div>
  );
}

export default App;
