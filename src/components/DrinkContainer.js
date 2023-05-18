import React from "react";
import { connect } from "react-redux";
import { buyDrink } from "../redux";

function DrinkContainer(props) {
  return (
    <>
      <h2>Wanna some drink hun... {props?.numOfDrinks}</h2>
      <button onClick={props.buyDrink}>coozy drink</button>
    </>
  );
}
const mapStateOfProps = state => {
    return{
        numOfDrinks: state?.drink.numOfDrinks
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyDrink: () => dispatch(buyDrink())
    }
}

export default connect(mapStateOfProps, mapDispatchToProps)(DrinkContainer)