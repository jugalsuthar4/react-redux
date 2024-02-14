import { IUserState } from "../../reducer/user"

export interface IGlobalState{
    cake:{
        numOfCakes:number
    },
    iceCream:{
        numOfIceCreams:number
    },
    user:  {loading:boolean,
    user:any[],
    error:string
    }
}