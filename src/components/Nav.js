import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>URL Shortener</h1>
      <a href="/url-shortener/Links">Links salvos</a>
    </div>
  );
};

export default Nav;
