import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { lable: "salad", type: "salad" },
  { lable: "meat", type: "meat" },
  { lable: "bacon", type: "bacon" },
  { lable: "cheese", type: "cheese" },
];

const BuildCountrols = (props) => {
  return (
    <div className={classes.BuildControles}>
      <p>Current Price : {props.price.toFixed(2)}</p>
      {controls.map((ele) => {
        return (
          <BuildControl
            key={ele.type}
            lable={ele.lable}
            added={() => props.ingrendientAdded(ele.type)}
            remove={() => props.ingrendientRemove(ele.type)}
            disabled={props.disableInfo[ele.type]}
          ></BuildControl>
        );
      })}
      <button
        onClick={props.onOrder}
        disabled={!props.purchasable}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildCountrols.propTypes = {};

export default BuildCountrols;
