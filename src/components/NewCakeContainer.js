import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer () {
const [value , setValue] = useState(1)
const numOfCake =  useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch()

    return(
        <>
        <h2>num of cakes {numOfCake} </h2>
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => dispatch(buyCake(value))}>Buy {value} Cake</button>
        </>
    )
}

export default NewCakeContainer