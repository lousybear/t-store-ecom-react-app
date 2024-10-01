import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../components/Cards";
import { url } from "../constants/endpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchIcon from "../components/SearchIcon";

export default function Home() {
  const [data, setData] = useState([]);

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

  return (
    <div className="home-layout">
      <Header />
      <div className="home-search-bar">
        <input type="text" placeholder="Search for products..." />
        {/* <button className="home-seacrh-btn">Search</button> */}

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
    </div>
  );
}
