import Login from "./HomeComponents/Login"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Booking from "./HomeComponents/Booking"
import Signup from "./HomeComponents/Signup"

function Home(props){
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
        Cookies.remove("orders")
    },[])
    
    return(
        <div>
            {!props.loggedIn?<div>
                        <Login/>
                        <br/>
                        {!signed?<Signup handleSigned = {(val)=>setSigned(val)}/>:<div>Login to continue</div>}
                    </div>
                    :<Booking/>}
        </div>
    )
}

export default Home