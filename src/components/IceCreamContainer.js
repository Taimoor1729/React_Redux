import React from "react";
import {  connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer (props) {
    console.log(props)
    return(
        <>
        <h2>welcome to the iceCream shop - {props?.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>buy iceCream</button>
        </>
    )
}
const mapStateToProps = state => {
    return{
        numOfIceCream : state?.iceCream.numOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)