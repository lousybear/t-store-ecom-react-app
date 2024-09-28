import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { url } from "../constants/endpoints";
import Header from "./Header";
import Sidebar from "./Sidebar";

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
    <div>
      <Header />
      <div>
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
      <Sidebar />
      {data && data.length > 0 ? (
        data.map((card) => {
          const { imageURL, price } = card;
          return <Cards imageURL={imageURL} price={price} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
