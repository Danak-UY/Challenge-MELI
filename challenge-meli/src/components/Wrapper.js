import React from "react";

function Wrapper({ children, myClass }) {
  return <div className={`wrapper ${myClass || ""}`}>{children}</div>;
}

export default Wrapper;
