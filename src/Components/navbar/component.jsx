import React from "react";
import Style from "./styles";
// import { style } from "../navbar/styles.scss";
const Navbar = () => {
  return (
    <Style>
      <div className="navbar">
        <h1 className="navbar-title">
          Presentation <br /> Management
        </h1>
      </div>
    </Style>
  );
};
export default Navbar;
