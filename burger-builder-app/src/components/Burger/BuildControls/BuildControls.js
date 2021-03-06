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
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button className={classes.orderButton} disabled={!props.purchasable} onClick={props.ordered}>
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
