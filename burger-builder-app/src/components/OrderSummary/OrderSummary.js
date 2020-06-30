import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

class OrderSummary extends Component {
  // Can change back to functional component
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
