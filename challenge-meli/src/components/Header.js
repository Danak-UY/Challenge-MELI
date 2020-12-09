import React from "react";

import SearchBar from "./SearchBar";

import "./../styles/header.css";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <img
          srcSet={process.env.PUBLIC_URL + "/assets/images/Logo_ML@2x.png 2x"}
          src={process.env.PUBLIC_URL + "/assets/images/Logo_ML.png"}
          alt="Logo Mercado Libre"
        />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
