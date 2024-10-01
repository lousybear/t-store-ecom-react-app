import React from "react";
import "./Filters.css";

export default function Filters({ data }) {
  const colors = [...new Set(data.map((item) => item.color))];
  const genders = [...new Set(data.map((item) => item.gender))];
  const types = [...new Set(data.map((item) => item.type))];
  const prices = [
    0,
    ...new Set(data.map((item) => item.price).sort((a, b) => a - b)),
  ];

  return (
    <div className="filter-component">
      <div className="filter-item">
        <p style={{ fontSize: "18px", fontWeight: "600", marginLeft: "5px" }}>
          Colors:
        </p>
        {colors.map((color, index) => (
          <label>
            <input id={index} type="checkbox" name={color} value={color} />
            {color}
          </label>
        ))}
      </div>
      <div className="filter-item">
        <p style={{ fontSize: "18px", fontWeight: "600", marginLeft: "5px" }}>
          Gender:
        </p>
        {genders.map((gender, index) => (
          <label>
            <input id={index} type="checkbox" name={gender} value={gender} />
            {gender}
          </label>
        ))}
      </div>
      <div className="filter-item">
        <p style={{ fontSize: "18px", fontWeight: "600", marginLeft: "5px" }}>
          Price:
        </p>
        {prices.map((price, index) => (
          <label>
            <input id={index} type="checkbox" name={price} value={price} />
            Rs {price} {prices[index + 1] && `- Rs ${prices[index + 1]}`}
          </label>
        ))}
      </div>
      <div className="filter-item">
        <p style={{ fontSize: "18px", fontWeight: "600", marginLeft: "5px" }}>
          Types:
        </p>
        {types.map((type, index) => (
          <label>
            <input id={index} type="checkbox" name={type} value={type} />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}
