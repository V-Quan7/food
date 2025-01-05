import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("Login")
    return (
        <div className='Login-Popup'>
            <form className="Login-Popup-container">
                <>
                    <div className="Login-Popup-title">
                        <h2>{currState}</h2>
                        <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <div className="Login-Popup-inputs">
                        {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                        <input type="text" placeholder='Your email' required />
                        <input type="text" placeholder='Password' required />
                    </div>
                    <button>{currState === "Sign up" ? "create account" : "Login"}</button>
                    <div className="Login-Popup-Condition">
                        <p>By continuing, i ergree to the terms of you & privacy policy</p>
                    </div>
                    {currState === "Login"
                        ? <p>create a new account? <span onClick={() => setcurrState("Sign up")}>Click here</span></p>
                        : <p>Alredy have an account <span onClick={() => setcurrState("Login")}>Login</span></p>
                    }
                </>
            </form>

        </div>
    )
}

export default LoginPopup
