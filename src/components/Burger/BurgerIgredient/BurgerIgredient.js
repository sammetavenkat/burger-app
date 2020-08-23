import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIgredient.module.css";

const BurgerIgredient = (props) => {
  let igredient = null;
  switch (props.type) {
    case "bread-bottom":
      igredient = <div className={classes.BreadBottom}> </div>;
      break;
    case "bread-top":
      igredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}> </div>
          <div className={classes.Seeds2}> </div>
        </div>
      );
      break;
    case "meat":
      igredient = <div className={classes.Meat}> </div>;
      break;
    case "cheese":
      igredient = <div className={classes.Cheese}> </div>;
      break;
    case "bacon":
      igredient = <div className={classes.Bacon}> </div>;
      break;
    case "salad":
      igredient = <div className={classes.Salad}> </div>;
      break;
    default:
      igredient = null;
      break;
  }

  return igredient;
};

BurgerIgredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIgredient;
