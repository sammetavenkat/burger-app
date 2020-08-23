import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(-20px)" : "translateY(0px)",
        opacity: props.show ? "1" : "0",
        pointerEvents: props.show ? "auto" : "none",
      }}
    >
      {props.children}
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
