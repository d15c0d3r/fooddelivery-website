import Cookies from "js-cookie"

function Nav(){

    function handleLogout(e){
        Cookies.remove("orders")
        Cookies.remove("token")
        Cookies.remove("email")
    }
    return (
        <div>
            {Cookies.get("email")?<h2>Hi {Cookies.get("email")}</h2> : <div></div>}
            <a href="http://localhost:3000/">Home</a>
            
            {(Cookies.get("token"))? (<div><a href="http://localhost:3000/" onClick = {(e)=>handleLogout(e)}>Logout</a></div>) : (<br/>)}
            <br/>
        </div>
    )
}

export default Nav