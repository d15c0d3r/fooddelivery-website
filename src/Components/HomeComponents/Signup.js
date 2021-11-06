import {useState} from "react"
import axios from "axios"

function Signup(){
    const [email,setEmail] = useState("");
    const [pass1,setPass1] = useState("");
    const [pass2,setPass2] = useState("");
    const [status,setStatus] = useState(false);

    const handleSubmit = (e)=>{
        if(pass1===pass2){
            e.preventDefault()
            const user = {email, password : pass1}
            console.log(user)
            axios.post("http://localhost:4000/signup",user)
                .then(res =>{
                    console.log(res)
                    res.data === "signed up"? setStatus(true) : setStatus(false)
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    }
    return(
        <div>
            <h2>New user? Signup Here!</h2>
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
                {status? <div> Signup Successful, Login to Continue </div> : <div></div>}
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Signup