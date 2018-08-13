import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="hamburger-container">
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </div>
    </header>
  );
}
