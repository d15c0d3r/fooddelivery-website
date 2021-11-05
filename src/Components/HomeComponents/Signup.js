import {useState} from "react"

function Signup(){
    return(
        <div>
            <h2>New user? Signup Here!</h2>
            <form >
                <label >Email</label>
                <br/>
                <input id = {"email"} htmlFor = {"email"}/>
                <br/>
                <label >Password</label>
                <br/>
                <input id = {"password"} type = {"password"} />
                <br/>
                <label >Confirm password</label>
                <br/>
                <input id = {"password"} type = {"password"} />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Signup