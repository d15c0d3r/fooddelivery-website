import { Route,Redirect, useHistory } from "react-router"
import Cookies from "js-cookie"


function ProtectedRoute({component : Component, ...rest}){
    return(
        <Route
            {...rest} 
            render = {(props)=> Cookies.get("token")? <Component{...props}/> : <Redirect to = "/"/>}              
        />
    )
}

export default ProtectedRoute