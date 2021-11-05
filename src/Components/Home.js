import Login from "./HomeComponents/Login";
import Signup from "./HomeComponents/Signup";
import Nav from "./Nav";
import {useEffect} from "react"
import Cookies from "js-cookie";

function Home(){
    useEffect(()=>{
        Cookies.remove("orders");
    })
    return(
        <div>
            <Nav/>
            <Login/>
            <Signup/>
        </div>
    );
}

export default Home