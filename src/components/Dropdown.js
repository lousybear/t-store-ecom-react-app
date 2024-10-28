import React, { useState } from "react";
import "./Dropdown.css";

export default function Dropdown({
  id,
  quantity,
  availableQty,
  updateQuantity,
}) {
  const [selectedQty, setSelectedQty] = useState(quantity);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const qtyArr = Array.from({ length: availableQty }, (_, index) => index + 1);

  const handleSelect = (item) => {
    setIsOpen(false);
    setSelectedQty(item);
    updateQuantity(id, item);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-btn" onClick={toggleDropdown}>
        Qty: {selectedQty}
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
