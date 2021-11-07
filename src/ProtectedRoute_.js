import { Route,Redirect, useHistory } from "react-router"
import Cookies from "js-cookie"
import axios from "axios"
import {useState,useEffect} from "react"

function ProtectedRoute_({component : Component, ...rest}){
    const [authenticated,setAuthenticated] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const jwt_token = Cookies.get("token")
        axios.post("http://localhost:4000/is-authenticated", {
            token: jwt_token
          }, {
            cancelToken: source.token
          })
        .then(res=>{
            Cookies.set("data", JSON.stringify(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
        return ()=>{source.cancel()}
    })
    return(
        <Route
            {...rest}
            render = {(props)=> Cookies.get("data")? <Component{...props}/> : <Redirect to = "/"/>}            
        />
    )
}

export default ProtectedRoute_