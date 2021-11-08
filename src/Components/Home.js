import Login from "./HomeComponents/Login"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Booking from "./HomeComponents/Booking"
import Signup from "./HomeComponents/Signup"
import CheckLoggedIn from "../Apis/CheckLoggedIn"

function Home(){
    const [logged,setLogged] = useState(false)
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
        Cookies.remove("orders")
        CheckLoggedIn(setLogged)
    },[])
    return(
        <div>
            {!logged?<div>
                        <Login/>
                        <br/>
                        {!signed?<Signup handleSigned = {(val)=>setSigned(val)}/>:<div>Login to continue</div>}
                    </div>
                    :<Booking/>}
        </div>
    )
}

export default Home