import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HookCakecontainner = () => {
   const numOfCake = useSelector(state => state.numOfCakes)
   const dispatch = useDispatch()
    return (
        <>
        <h2> number of cakes are - {numOfCake}</h2>
        <button onClick={() => dispatch(buyCake())}>buyCake</button>
        </>
    )
}
export default HookCakecontainner