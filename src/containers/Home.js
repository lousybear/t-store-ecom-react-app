import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../components/Cards";
import { url } from "../constants/endpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchIcon from "../components/SearchIcon";
import ShoppingCart from "../components/ShoppingCart";

export default function Home() {
  const [data, setData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setCartItems([data[0]]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="home-layout">
      <Header cartCount={cartItems.length} onCartClick={toggleCart} />
      {isCartOpen ? (
        <ShoppingCart items={cartItems} />
      ) : (
        <>
          <div className="home-search-bar">
            <input type="text" placeholder="Search for products..." />
            <SearchIcon />
          </div>
          <div className="home-main-container">
            {data && data.length > 0 && <Sidebar data={data} />}
            <div className="home-card-container">
              {data && data.length > 0 ? (
                data.map((card) => {
                  const { imageURL, price, name } = card;
                  return (
                    <Cards
                      key={card.id}
                      imageURL={imageURL}
                      price={price}
                      name={name}
                    />
                  );
                })
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
