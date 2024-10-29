import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Products from "../components/Products";
import { url } from "../constants/endpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ShoppingCart from "../components/ShoppingCart";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import Search from "../components/Search";

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { totalCount } = useContext(ShoppingCartContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleCartClick = () => {
  //   setIsCartOpen(!isCartOpen);
  // };
  const isCartPage = window.location.pathname === "/cart";

  return (
    <div className="home-layout">
      <Header cartCount={totalCount} />
      {isCartPage ? (
        <ShoppingCart />
      ) : (
        <>
          <Search
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
          <div className="home-main-container">
            {data && data.length > 0 && (
              <Sidebar data={data} setFilteredData={setFilteredData} />
            )}
            <div className="home-card-container">
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((product) => {
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
