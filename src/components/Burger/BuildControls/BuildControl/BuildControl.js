import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div>
      <div className={classes.BuildControl}>{props.lable}</div>
      <button
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {};

export default BuildControl;
