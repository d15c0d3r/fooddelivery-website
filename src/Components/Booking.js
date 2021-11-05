import Cookies from "js-cookie";
import {useEffect} from "react";
import Nav from "./Nav";

function Booking(){
    useEffect(()=>{
        Cookies.remove("orders");
    })
    return(
        <div>
            <Nav/>
            <a href = "/bookings/d2">
                <img src="/foodfrom/d2.png" alt = "" width="200" height="200"/>
                <h1>Daffodils2</h1>
            </a>
            <a href = "/bookings/food-court">
                <img src="/foodfrom/food-court.png" alt = "" width="200" height="200"/>
                <h1>FoodCourt</h1>
            </a>
        </div>
    );
}

export default Booking