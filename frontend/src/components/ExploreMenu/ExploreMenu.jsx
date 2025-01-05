import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu'>
            <h1>Explore or menu</h1>
            <p className="explore-menu-text">
                choose from a diverse menu featuring adelectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experence, one delicious meal at a time.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div>
                            <div className="explore-menu-lits-item" onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} key={item._id}>
                                <img className={category === item.menu_image ? "active" : ""} src={item.menu_image} alt="" />
                                <p className='explore-menu-name'>
                                    {item.menu_name}
                                </p>
                            </div>
                        </div>
                    )
                }


                )}
            </div>
            <hr />

        </div>
    )
}

export default ExploreMenu
