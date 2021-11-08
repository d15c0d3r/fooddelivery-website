import Login from "./Login"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Booking from "./Booking"
import Signup from "./Signup"
import { SignedStatus } from "./SignedStatus"

function Home(props){
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        Cookies.remove("orders")
    },[])
    
    return(
        <div>
            {!props.loggedIn?<div>
                        <Login/>
                        <br/>
                        {status!=="signedup"?<Signup handleStatus = {(val)=>setStatus(val)}/>:<div>Login to continue</div>}
                        <SignedStatus status = {status}/>
                    </div>
                    :<Booking/>}
        </div>
    )
}

export default Home