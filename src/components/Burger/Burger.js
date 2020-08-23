import React from "react";
import PropTypes from "prop-types";
import classes from "./Burger.module.css";
import BurgerIgredient from "./BurgerIgredient/BurgerIgredient";

function Burger(props) {
  let ingrendientsComps = Object.keys(props.ingrendients)
    .map((ele) => {
      return [...new Array(props.ingrendients[ele])].map((_, i) => {
        return (
          <BurgerIgredient key={ele + "_" + i} type={ele}></BurgerIgredient>
        );
      });
    })
    .flat();
  if (ingrendientsComps.length === 0) {
    ingrendientsComps = <p>Please start adding ingrendients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIgredient type="bread-top"></BurgerIgredient>
      {ingrendientsComps}
      <BurgerIgredient type="bread-bottom"></BurgerIgredient>
    </div>
  );
}

Burger.propTypes = {
  ingrendients: PropTypes.object,
};

export default Burger;
