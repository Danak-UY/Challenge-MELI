import React from "react";

import "./../styles/actionButton.css";

function ActionButton({ label, variant }) {
  return <button className={`btn btn-${variant}`}>{label}</button>;
}

export default ActionButton;
