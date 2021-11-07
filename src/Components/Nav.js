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
            <br/>
            {(Cookies.get("token"))? (<a href="http://localhost:3000/" onClick = {(e)=>handleLogout(e)}>Logout</a>) : (<br/>)}
            <br/>
            <br/>
        </div>
    )
}

export default Nav