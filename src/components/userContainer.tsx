import React, { useEffect } from 'react'
import { IGlobalState } from '../actions/types/globalState'
import { IUserState } from '../reducer/user'
import { fetchUsers } from '../actions/user'
import {connect} from 'react-redux';

const UserContainer = ({users,getUsers}:{users?:IUserState,getUsers?:Function}) => {
    useEffect(()=>{
     getUsers!();
    },[])
    if(users?.loading) return <h1>Loading ... </h1>

    if(users?.error) return <h1>{users.error}</h1>

  return (
    <div>
        {
            users?.user.map((u)=>{
                return <h2 key={u}>{u}</h2>
            })
        }
    </div>
  )
}

const mapStateToProps=(state:IGlobalState)=>{
    return {
        users:state.user
    }
}
const mapDispatchToProps=(dispatch:Function)=>{
    return {
        getUsers:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);