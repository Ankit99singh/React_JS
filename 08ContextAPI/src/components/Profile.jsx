import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {

    const {user} = useContext(UserContext)
    
    if(!user) {return(
            <>
            <h1>please login....</h1>
            </>
        )
    }

    return(
        <>
        <h1>Welcome {user.userName} !!!</h1>
        </>
    )
}

export default Profile;