import React from "react";
import './styles.css'

const Header = () => {
  return (
    <div className="navbar">
      <h1>
        CryptoTracker <span style={{ color: "var(--purple)" }}>.</span>{" "}
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Comapare</p>
        </a >
        <a href="/">
          <p className="link">Watchlist</p>
        </a>
        <a href="/">
          <p className="link">Dashboard</p>
        </a>
        <a href="/">
          <p className="link"></p>
        </a>
      </div>
    </div>
  );
};

export default Header;
