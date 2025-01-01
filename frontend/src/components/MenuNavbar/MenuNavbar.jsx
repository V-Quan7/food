import React, { useState } from 'react'
import './MenuNavbar.css'
import { assets } from '../../assets/assets'



const MenuNavbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
                <li onClick={() => setMenu("contac-us")} className={menu === "contac-us" ? "active" : ""}>contac-us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" className='dot' />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className='dot'></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default MenuNavbar
