import {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router"

function Signup(){
    const [email,setEmail] = useState("")
    const [pass1,setPass1] = useState("")
    const [pass2,setPass2] = useState("")
    const history = useHistory()

    const handleSubmit = (e)=>{
        if(pass1===pass2){
            e.preventDefault()
            const user = {email, password : pass1}
            console.log(user)
            axios.post("http://localhost:4000/signup",user)
                .then(res =>{
                    console.log(res)
                    if(res.data!=="error") history.push("/")
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    }
    return(
        <div>
            <h2>SIGNUP</h2>
            <form onSubmit = {(e)=>{handleSubmit(e)}}>
                <label >Email</label>
                <br/>
                <input 
                    id = "mail" 
                    type = "email"
                    required
                    onChange = {(e)=>{setEmail(e.target.value)}}
                    />
                <br/>
                <label >Password</label>
                <br/>
                <input 
                    id = "pass1" 
                    type = "password"
                    required
                    onChange = {(e)=>{setPass1(e.target.value)}}
                />
                <br/>
                <label >Confirm password</label>
                <br/>
                <input 
                    id = "pass2" 
                    type = "password"
                    required
                    onChange = {(e)=>{setPass2(e.target.value)}}    
                />
                <br/>
                { pass1===pass2? <div></div> : <div>Passwords didn't match</div>}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup