
export function LoginStatus(props){
    if(props.status){
        if(props.status === "wrongpassword") return (<h2>Wrong Password</h2>)
        if(props.status === "error") return (<h2>Login failed due to unkown reason. Please try again</h2>)
    }else return <div></div>
}