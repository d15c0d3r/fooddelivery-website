import axios from "axios"
import Cookies from "js-cookie"

export default function CheckLoggedIn(setter){
    axios.get(`http://localhost:4000/isLoggedIn`,{
        params : {
            token : Cookies.get("token"),
            email : Cookies.get("email")
        }})
        .then(res=>{
            setter(res.data)
        })
        .catch(err=>{
            console.log(err)
            setter(false)
        })
}