import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

// step2 create and export Provider
const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null)// user is object holding username and password
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider