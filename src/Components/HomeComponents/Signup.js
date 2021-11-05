function Signup(){
    return(
        <div>
            <h2>New user? Signup Here!</h2>
            <form >
                <label htmlFor = {"email"}>Email</label>
                <br/>
                <input id = {"email"} />
                <br/>
                <label htmlFor = {"password"}>Password</label>
                <br/>
                <input id = {"password"} type = {"password"} />
                <br/>
                <label htmlFor = {"password"}>Confirm password</label>
                <br/>
                <input id = {"password"} type = {"password"} />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Signup