import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./types/user"
import axios from "axios"

export type userActions= |{
    type:typeof FETCH_USER_REQUEST
} | {
    type:typeof FETCH_USER_SUCCESS,
    payload:any[]
} |{
    type:typeof FETCH_USER_ERROR,
    payload:string
}

export const fetchUserRequest=():userActions=>{
    return {
        type:FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess=(users:any[]):userActions=>{
    return {
       type:FETCH_USER_SUCCESS,
       payload:users
    }
}

export const fetchUserError=(error:string):userActions=>{
    return {
        type:FETCH_USER_ERROR,
        payload:error
    }
}

export const fetchUsers=()=>async (dispatch:Function)=>{
    try {
        dispatch(fetchUserRequest());
        const result=await axios.get("https://jsonplaceholder.typicode.com/users");
        const users=result.data.map((user:any)=>user.id);
        dispatch(fetchUserSuccess(users))
    } catch (error) {
        dispatch(fetchUserError("unable to find users"))
    }
}