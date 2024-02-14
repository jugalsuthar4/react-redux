import { BUY_ICECREAM } from "./types/icecream"

export type IceCreamActions= |{
   type:typeof BUY_ICECREAM,
   payload:any
}


export const buyIcecream=(numberOfCake=1)=>{
    return {
        type:BUY_ICECREAM,
        payload:numberOfCake
    }
}