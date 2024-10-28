import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Products from "../components/Products";
import { url } from "../constants/endpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchIcon from "../components/SearchIcon";
import ShoppingCart from "../components/ShoppingCart";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

export default function Home() {
  const [data, setData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalCount } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="home-layout">
      <Header cartCount={totalCount} onCartClick={toggleCart} />
      {isCartOpen ? (
        <ShoppingCart />
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
                data.map((product) => {
                  const { id, imageURL, price, name, quantity } = product;
                  return (
                    <Products
                      key={id}
                      id={id}
                      imageURL={imageURL}
                      price={price}
                      name={name}
                      availableQty={quantity}
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
