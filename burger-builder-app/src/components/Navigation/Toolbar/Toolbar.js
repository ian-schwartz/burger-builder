import React from "react";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div>
      <header className={classes.toolbar}>
        <div>Menu</div>
        <div>Logo</div>
        <nav>...</nav>
      </header>
    </div>
  );
};

export default Toolbar;
