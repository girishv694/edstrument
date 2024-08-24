import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let data = [
    {
      url: "/one",
      name: "One",
    },
    {
      url: "/two",
      name: "Two",
    },
    {
      url: "/three",
      name: "Three",
    },
  ];

  return (
    <header className="header">
      <div className={`nav ${isOpen ? "open" : ""}`}>
        <div className="nav-list">
          {data.map((item, index) => (
            <p
              onClick={() => {
                setIsOpen(false);
              }}
              key={item?.url}
              className={`nav-item`}
            >
              <Link className={`${
                location.pathname === item?.url ? "active-menu" : "inactive-menu"
              }`} to={item?.url}>{item?.name}</Link>
            </p>
          ))}
        </div>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
