import { IGlobalState } from '../actions/types/globalState'
import { buyIcecream } from '../actions/icecream'
import {useState} from "react";
import { connect } from 'react-redux'
const IceCreamContainer = ({iceCream,buyIceCream}:any) => {
    const [number,setNumber]=useState(1);
  return (
    <>
    <div>IceCreamContainer</div>
     <h4>{iceCream}</h4>
     <input type="number" value={number} onChange={e=>setNumber(e.target.value as any)}/>
     <button onClick={()=>buyIceCream(number)}>buy icecream</button>
    </>

  )
}

const mapStateToProps=(state:IGlobalState)=>{
    return {
        iceCream:state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps=(dispatch:Function)=>{
   return {
    buyIceCream:(number:number)=>dispatch(buyIcecream(number))
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);