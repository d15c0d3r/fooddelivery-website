import { Route,Redirect } from "react-router"
import Home from "./Components/Home"
import Cookies from "js-cookie"
import axios from "axios"
import {useState} from "react"

function ProtectedRoute({component : Component}){
    const [authenticated,setAuthenticated] = useState(false)

    function isAuthenticated(){
        const token = Cookies.get("token")
        axios.post("http://localhost:4000/is-authenticated",{token})
            .then(res=>{
                console.log(res.data)
                if(res.data){
                    return true
                } return false
            })
    }
    return(
        <Route render = {
            (props)=>{
                if(isAuthenticated()){
                    return(
                        <Component/>
                    )
                }
                return(
                    <Redirect to = {
                            {pathname : "/"}
                        }
                    />
                )
            }
        }/>
    )
}

export default ProtectedRoute