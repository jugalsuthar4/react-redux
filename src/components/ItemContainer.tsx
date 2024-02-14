import React from 'react'
import { connect } from 'react-redux';
import { IGlobalState } from '../actions/types/globalState';
const ItemContainer = ({type,count}:any) => {
  return (
    <div>type is {type}</div>
  )
}

const mapStateToProps=(state:IGlobalState,ownProps:any)=>{
    console.log("own prpp is ",ownProps)
    if(state.iceCream.numOfIceCreams%2){
        return {
            type:"ODD"
        }
    }
    return  {
        type:"EVEN"
    }
}
export default connect(mapStateToProps)(ItemContainer);