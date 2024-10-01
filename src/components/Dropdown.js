import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({ selectedQty, availableQty }) {
  const [selectedValue, setSelectedValue] = useState(selectedQty);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const qtyArr = Array.from({ length: availableQty }, (_, index) => index + 1);

  const handleSelect = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        Qty: {selectedValue}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {qtyArr.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
