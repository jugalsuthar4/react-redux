import React from 'react'
import { IGlobalState } from '../actions/types/globalState'
import { buyIcecream } from '../actions/icecream'

import { connect } from 'react-redux'
const IceCreamContainer = ({iceCream,buyIceCream}:any) => {
  return (
    <>
    <div>IceCreamContainer</div>
     <h4>{iceCream}</h4>
     <button onClick={()=>buyIceCream()}>buy icecream</button>
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
    buyIceCream:()=>dispatch(buyIcecream())
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);