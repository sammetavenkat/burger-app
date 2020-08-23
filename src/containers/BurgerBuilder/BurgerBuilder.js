import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildCountrols from "../../components/Burger/BuildControls/BuildCountrols";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingrendients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purching: false,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingrendients[type];
    const updatedCount = oldCount + 1;
    const updatedingrendients = {
      ...this.state.ingrendients,
    };
    updatedingrendients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingrendients: updatedingrendients });
    this.updatePurchaseState(updatedingrendients);
  };
  removeIngrendientHandler = (type) => {
    const oldCount = this.state.ingrendients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedingrendients = {
      ...this.state.ingrendients,
    };
    updatedingrendients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingrendients: updatedingrendients });
    this.updatePurchaseState(updatedingrendients);
  };
  updatePurchaseState = (ingrendients) => {
    const sum = Object.keys(ingrendients)
      .map((key) => ingrendients[key])
      .reduce((total, ele) => total + ele, 0);
    this.setState({ purchasable: sum > 0 });
  };
  purchsHandler = () => {
    this.setState({ purching: true });
  };

  render() {
    const disableInfo = { ...this.state.ingrendients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.purching}>
          <OrderSummary ingrendients={this.state.ingrendients} />
        </Modal>
        <Burger ingrendients={this.state.ingrendients} />
        <BuildCountrols
          ingrendientAdded={this.addIngredientHandler}
          ingrendientRemove={this.removeIngrendientHandler}
          disableInfo={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          onOrder={this.purchsHandler}
        />
      </React.Fragment>
    );
  }
}
