import React from "react";
import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Lettuce", type: "lettuce" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.buildControls}>
      {controls.map((item) => (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => props.ingredientAdded(item.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
