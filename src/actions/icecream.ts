import { BUY_ICECREAM } from "./types/icecream"

export type IceCreamActions= |{
   type:typeof BUY_ICECREAM
}


export const buyIcecream=()=>{
    return {
        type:BUY_ICECREAM
    }
}