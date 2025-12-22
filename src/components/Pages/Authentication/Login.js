import React from "react"
import "./login.css"
const Login = () => {
    return(
        <>
        <div className="login-container">
            <div className="login">
                <h1>Login</h1>
                <form className="login-form">
                    <input required  type="text" placeholder="Username" />
                    <input required type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>
        </div>
        </>
    )
}

export default Login;
