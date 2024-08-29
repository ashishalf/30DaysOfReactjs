// Responsive Hamburger
import React, { useState } from "react";
import "./styles/style.css";

function Seventeen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-icon" onClick={toggle}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Seventeen;
