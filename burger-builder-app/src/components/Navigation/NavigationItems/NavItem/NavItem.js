import React from "react";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div>
      <li className={classes.navItem}>
        <a href={props.link} className={props.active ? classes.active : null}>
          {props.children}
        </a>
      </li>
    </div>
  );
};

export default NavItem;
