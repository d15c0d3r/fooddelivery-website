import Cookies from "js-cookie";


function Nav(){

    function handleLogout(e){
        Cookies.remove("orders")
        Cookies.remove("token")
        Cookies.remove("email")
    }
    return (
        <div>
            
            <a href="http://localhost:3000/">Home</a>
            <br/>
            <a href="http://localhost:3000/bookings">Bookings</a>
            <br/>
            {(Cookies.get("token"))? (<a href="http://localhost:3000/" onClick = {(e)=>handleLogout(e)}>Logout</a>) : (<div></div>)}
            <br/>
            <br/>
        </div>
    )
}

export default Nav