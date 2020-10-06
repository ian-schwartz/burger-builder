import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "axios";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Ian Schwartz",
        address: {
          street: "Teststreet 1",
          zipCode: "41251",
          country: "US",
        },
        email: "test@example.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.contactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          <input
            className={classes.input}
            type="email"
            name="email"
            placeholder="Your Email"
          ></input>
          <input
            className={classes.input}
            type="text"
            name="street"
            placeholder="Street"
          ></input>
          <input
            className={classes.input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          ></input>
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
