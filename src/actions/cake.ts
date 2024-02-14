import { BUY_CAKE } from "./types/cake"

export type CakeActions = | {
    type:typeof BUY_CAKE
}

export const buyCake=()=>{
    return {
        type:  BUY_CAKE
    }
}