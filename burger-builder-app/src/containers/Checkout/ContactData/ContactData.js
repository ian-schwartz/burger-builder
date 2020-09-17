import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  render() {
    return (
      <div>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name"></input>
          <input type="email" name="name" placeholder="Your Email"></input>
          <input type="text" name="street" placeholder="Street"></input>
          <input type="text" name="postal" placeholder="Postal Code"></input>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
