import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import SearchBar from "./SearchBar";

import "./../styles/header.css";

function Header() {
  return (
    <header>
      <Wrapper>
        <Link to="/">
          <img
            srcSet={process.env.PUBLIC_URL + "/assets/images/Logo_ML@2x.png 2x"}
            src={process.env.PUBLIC_URL + "/assets/images/Logo_ML.png"}
            alt="Logo Mercado Libre"
          />
        </Link>
        <SearchBar />
      </Wrapper>
    </header>
  );
}

export default Header;
