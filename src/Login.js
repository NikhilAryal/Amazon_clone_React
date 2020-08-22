import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // I tried enclosing above [] values within {} just like in data layer. The function fired error right when
    // I typed in the first values.

    // Login logic here
    const login = (event) => {
        event.preventDefault();                                     // stops annoying refreshing
        // login logic here
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // redirect to homepage after getting logged in
                history.push("/");
            })
            .catch((e) => alert(e.message));

    }

    const register = (event) => {
        event.preventDefault();                                     // stops annoying refreshing

        // register logic here
        auth
            .signInWithEmailAndPassword(email, password)

            .then((auth) => {
                // created a user and logged in, redirect to the homepage
                history.push("/");
            })

            .catch((e) => alert(e.message));

    }



    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo"
                     src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
                     alt="amazon_image" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input  value= { email }  onChange={ event => setEmail(event.target.value)}   type="email" />
                    <h5>Password</h5>
                    <input  value={ password }  onChange={ event => setPassword(event.target.value)}   type="password" />
                    <button onClick={ login } type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>
                    By signing in, you agree to Amazon's policies and conditions. See our Privacy notice and Cookies
                    notice for further information.
                </p>
                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>

        </div>
    );
}
export default Login;

