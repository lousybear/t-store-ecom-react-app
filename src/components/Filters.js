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

  const priceRanges = useMemo(
    () => [
      { min: 0, max: 250, label: "0 - Rs250" },
      { min: 251, max: 450, label: "Rs251 - Rs450" },
      { min: 450, max: 1000, label: "Rs 450" },
    ],
    []
  );

  const [selectedFilters, setSelectedFilters] = useState({
    colors: [],
    genders: [],
    types: [],
    priceRanges: [],
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
      if (values.length && key !== "priceRanges") {
        filteredData = filteredData.filter((item) =>
          values.includes(item[key.slice(0, -1)])
        );
      }
    });

    if (selectedFilters.priceRanges.length > 0) {
      filteredData = filteredData.filter((item) => {
        return selectedFilters.priceRanges.some((rangeIndex) => {
          const range = priceRanges[rangeIndex];
          return item.price >= range.min && item.price <= range.max;
        });
      });
    }

    setFilteredData(filteredData);
  }, [selectedFilters, data, setFilteredData, priceRanges]);

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
        {priceRanges.map((range, index) => (
          <label key={range.label}>
            <input
              type="checkbox"
              value={index}
              checked={selectedFilters.priceRanges.includes(index)}
              onChange={() => handleFilterChange("priceRanges", index)}
            />
            {range.label}
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
