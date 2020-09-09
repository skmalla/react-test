import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <Link className="navbar-brand" to="/" href="#">
          REACT CODING TASK
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation__items">
        <ul>
          <li>
            <Link className="navbar-brand" to="/" href="#">
              HISTORY
            </Link>
          </li>
          <li>
            <Link className="navbar-brand" to="/payload" href="#">
              PAYLOAD
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;
