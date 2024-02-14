import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../actions/cake';
import { IGlobalState } from '../actions/types/globalState';

const CupCakeContainer = () => {
    const cakes=useSelector((state:IGlobalState)=>state.cake.numOfCakes)
    const dispatch=useDispatch();
  return (
    <>
    <h4>cup cake - {cakes}</h4>
    <button onClick={()=>dispatch(buyCake())}>buy cup cake</button>
    </>
  )
}

export default CupCakeContainer