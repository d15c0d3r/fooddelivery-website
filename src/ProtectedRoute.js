import { Route,Redirect, useHistory } from "react-router"
import Cookies from "js-cookie"
import axios from "axios"
import {useState,useEffect} from "react"

function ProtectedRoute({component : Component, ...rest}){
    const [authenticated,setAuthenticated] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const token = Cookies.get("token")
        if(token){
            setAuthenticated(true)
        }
        else{
            setAuthenticated(false)
        }
    })
    return(
        <Route
            {...rest}
            render = {(props)=> Cookies.get("token")? <Component{...props}/> : <Redirect to = "/"/>}            
        />
    )
}

export default ProtectedRoute