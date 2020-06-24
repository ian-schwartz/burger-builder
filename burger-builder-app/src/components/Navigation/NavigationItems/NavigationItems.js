import React from "react";
import classes from "./NavigationItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavigationItems = (props) => {
  return (
    <div>
      <ul className={classes.navigationItems}>
        <NavItem link="/" active>
          Burger Builder
        </NavItem>
        <NavItem link="/">Checkout</NavItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
