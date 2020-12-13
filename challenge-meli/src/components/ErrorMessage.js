import React from "react";
import { Link } from "react-router-dom";

import "./../styles/errorMessage.css";

function ErrorMessage({ title }) {
  return (
    <div className="error">
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/error.svg`}
        alt="Hubo un error"
      />
      <h1>{title}</h1>
      <Link to="/">Ir a la Página Principal</Link>
    </div>
  );
}

export default ErrorMessage;
