import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='Header'>
            <div className="Header-contents">
                <h2>Oder your favourite food here</h2>
                <p>choose from a diverse menu featuring adelectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experence, one delicious meal at a time.
                </p>
                <button>View menu</button>
            </div>
        </div>
    )
}

export default Header
