import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "./SearchIcon";

export default function Search({ filteredData, setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    const searchResults = filteredData.filter((item) => {
      // Convert all searchable fields to lowercase for case-insensitive search
      const genderMatch = item.gender?.toLowerCase().includes(searchTerm);
      const colorMatch = item.color?.toLowerCase().includes(searchTerm);
      const typeMatch = item.type?.toLowerCase().includes(searchTerm);
      const priceRangeMatch = item.priceRange
        ?.toLowerCase()
        .includes(searchTerm);

      // Return true if any field matches the search term
      return genderMatch || colorMatch || typeMatch || priceRangeMatch;
    });
    setFilteredData(searchResults);
  };

  return (
    <div className="home-search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for products..."
      />
      <SearchIcon onClick={handleSearch} className="search-button-container" />
    </div>
  );
}
