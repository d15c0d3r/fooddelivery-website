import Cookies from "js-cookie";

function Nav(){
    function handleLogout(e){
        Cookies.remove("orders")
        Cookies.remove("token")
    }
    return (
        <div>
            <a href="http://localhost:3000/">Home</a>
            <br/>
            <a href="http://localhost:3000/bookings">Bookings</a>
            <br/>
            <a href="http://localhost:3000/" onClick = {(e)=>handleLogout(e)}>Logout</a>
            <br/>
            <br/>
        </div>
    )
}

export default Nav