import Login from "./HomeComponents/Login"
import {useEffect, useState} from "react"
import Cookies from "js-cookie"
import Booking from "./Booking"

function Home(){
    const [display,setDisplay] = useState(true)
    useEffect(()=>{
        Cookies.remove("orders")
        if(Cookies.get("email") && Cookies.get("token")){
            setDisplay(false)
        }else{
            setDisplay(true)
        }
    })
    return(
        <div>
            {display?<Login/>:<div></div>}
            {!display?<Booking/>:<div></div>}
            {display?<div><h2>New user?</h2><a href = "http://localhost:3000/signup">Signup Here!</a></div> : <div></div>}
        </div>
    )
}

export default Home