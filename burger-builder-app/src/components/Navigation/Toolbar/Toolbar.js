import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    <div>
      <header className={classes.toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>...</nav>
      </header>
    </div>
  );
};

export default Toolbar;
