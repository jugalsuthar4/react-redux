import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/types/user"
import { userActions } from "../actions/user"

export interface IUserState {
    loading:boolean,
    user:any[],
    error:string
}

const initialUserState:IUserState ={ 
    error:"",
    loading:false,
    user:[]
}

export const userReducer=(state:IUserState=initialUserState,action:userActions)=>{
    switch(action.type){
        case  FETCH_USER_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
        case FETCH_USER_SUCCESS:{
            return {
                ...state,
                loading:false,
                user:action.payload,
                error:""
            }
        }
        case FETCH_USER_ERROR:{
            return {
                ...state,
                loading:false,
                user:[],
                error:action.payload
            }
        }
        default:return state
    }
}