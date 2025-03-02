import { useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {

    const [userName,setUserName]=useState("")
    const [password, setPassword]=useState("")

    const {setUser}= useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

    return ( 
        <>
        <h2>Login</h2>
        <input type="text" placeholder="userName"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}/>
        <input type="password" placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
     );
}

export default Login;