import React from "react";
import Aux from "../../../hos/Aux1";
//import classes from "./OrderSummary.module.css";

const OrderSummary = (props) => {
  const ingredentsList = Object.keys(props.ingrendients).map((ele, i) => {
    return (
      <li key={ele + "_" + i}>
        <span style={{ textTransform: "capitalize" }}>{ele}</span> :{" "}
        {props.ingrendients[ele]}
      </li>
    );
  });
  return (
    <Aux>
      <h1>Your Order</h1>
      <p>A Burger with the following ingredents :</p>
      <ul>{ingredentsList}</ul>
      <p>Continue for check out?</p>
    </Aux>
  );
};

OrderSummary.propTypes = {};

export default OrderSummary;
