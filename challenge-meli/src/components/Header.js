import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import ResponsiveImage from "./ResponsiveImage";
import SearchBar from "./SearchBar";

import "./../styles/header.css";

function Header() {
  return (
    <header>
      <Wrapper>
        <Link to="/" className="meli-logo">
          <ResponsiveImage
            fileDir="images/Logo_ML"
            imgAltText="Logo Mercado Libre"
          />
        </Link>
        <SearchBar />
      </Wrapper>
    </header>
  );
}

export default Header;
