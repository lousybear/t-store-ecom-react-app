import React, { useState, useEffect, useMemo } from "react";
import "./Filters.css";

export default function Filters({ data, setFilteredData }) {
  const colors = useMemo(
    () => [...new Set(data.map((item) => item.color))],
    [data]
  );
  const genders = useMemo(
    () => [...new Set(data.map((item) => item.gender))],
    [data]
  );
  const types = useMemo(
    () => [...new Set(data.map((item) => item.type))],
    [data]
  );
  const prices = useMemo(
    () => [0, ...new Set(data.map((item) => item.price).sort((a, b) => a - b))],
    [data]
  );

  const [selectedFilters, setSelectedFilters] = useState({
    colors: [],
    genders: [],
    types: [],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  useEffect(() => {
    let filteredData = data;

    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length) {
        filteredData = filteredData.filter((item) =>
          values.includes(item[key.slice(0, -1)])
        );
      }
    });

    setFilteredData(filteredData);
  }, [selectedFilters, data, setFilteredData]);

  return (
    <div className="filter-component">
      <div className="filter-item">
        <p className="filter-label">Colors:</p>
        {colors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={selectedFilters.colors.includes(color)}
              onChange={() => handleFilterChange("colors", color)}
            />
            {color}
          </label>
        ))}
      </div>

      <div className="filter-item">
        <p className="filter-label">Gender:</p>
        {genders.map((gender) => (
          <label key={gender}>
            <input
              type="checkbox"
              value={gender}
              checked={selectedFilters.genders.includes(gender)}
              onChange={() => handleFilterChange("genders", gender)}
            />
            {gender}
          </label>
        ))}
      </div>

      <div className="filter-item">
        <p className="filter-label">Price:</p>
        {prices.map((price, index) => (
          <label key={price}>
            <input type="checkbox" value={price} />
            Rs {price} {prices[index + 1] && `- Rs ${prices[index + 1]}`}
          </label>
        ))}
      </div>

      <div className="filter-item">
        <p className="filter-label">Types:</p>
        {types.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={selectedFilters.types.includes(type)}
              onChange={() => handleFilterChange("types", type)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
