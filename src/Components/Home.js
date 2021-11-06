import Login from "./HomeComponents/Login"
import {useEffect} from "react"
import Cookies from "js-cookie"

function Home(){
    useEffect(()=>{
        Cookies.remove("orders")
    })
    return(
        <div>
            <Login/>
            <h2>New user?</h2><a href = "http://localhost:3000/signup">Signup Here!</a>
        </div>
    )
}

export default Home