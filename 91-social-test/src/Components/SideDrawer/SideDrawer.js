import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default sideDrawer;
