function Login(){
    return(
        <div>
            <h2>Login here if you already have an account</h2>
            <form >
                <label htmlFor = {"text"}>RegNumber</label>
                <br/>
                <input id = {"email"} />
                <br/>
                <label htmlFor = {"password"}>Password</label>
                <br/>
                <input id = {"password"} type = {"password"} />
                <br/>
                <button>Submit</button>
                <br/>
                <br/>
                <a href = "http://localhost:3000/forgot-password">Forgot Password</a>
                <br/>
            </form>
        </div>
    );
}

export default Login