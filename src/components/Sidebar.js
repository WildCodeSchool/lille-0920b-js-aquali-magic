import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Slidebar = (props) => {
  return (
    <Menu>
      <Link to="/histoire">
        <a className="menu-item">Histoire</a>
      </Link>
      <Link to="/carte">
        <a className="menu-item">Cartes</a>
      </Link>
      <Link to="/booster">
        <a className="menu-item">Booster</a>
      </Link>
    </Menu>
  );
};

export default Slidebar;
