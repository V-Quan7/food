import React, { useState } from 'react'
import './MenuNavbar.css'
import { assets } from '../../assets/assets'
import { BrowserRouter as Router, Link } from 'react-router-dom';



const MenuNavbar = ({ setshowLogin }) => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo} alt="" className='logo' /></Link>

            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
                <li onClick={() => setMenu("contac-us")} className={menu === "contac-us" ? "active" : ""}>contac-us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className='dot' />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className='dot'></div>
                </div>
                <button onClick={() => setshowLogin(true)}> sign in</button>
            </div>
        </div >
    )
}

export default MenuNavbar
