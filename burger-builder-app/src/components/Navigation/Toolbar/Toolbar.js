import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NaviationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <div>
      <header className={classes.toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
          <NaviationItems />
        </nav>
      </header>
    </div>
  );
};

export default Toolbar;
