import Cookies from "js-cookie"
import { useState ,useEffect} from "react"
import Nav from "./Nav"

function Checkout(props){
    const items = JSON.parse(Cookies.get("orders"))
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let newTotal = 0
        items.forEach(item => {
            if(item.count>0){
                newTotal+=(item.price*item.count)
            }
        });
        setTotal(newTotal)
    },[items])

    return(
        <div>
            <Nav/>
            {items.map(item=>(
                item.count>0 ? (<div  key = {item.id}>{item.name} X {item.count} = {item.amount}</div>):(<div  key = {item.id}></div>)
            ))}
            <br/>
            <h>YOUR TOTAL : {total}</h>
            <br/>
            <br/>
            {total!==0?(<button>Make Payment</button>):(<div></div>)}
        </div>

    )
}

export default Checkout