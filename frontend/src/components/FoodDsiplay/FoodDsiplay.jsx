import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDsiplay.css'

const FoodDsiplay = ({ category }) => {
    const { Food_list } = useContext(StoreContext)

    return (
        <div className='FoodDisplay' id='FoodDsiplay'>
            <div className="Food-display-list">
                {food_list.map((item, index) => {
                    if (category === "ALL" || category === item.category) {
                        return (<FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />)
                    }

                }
                )}
            </div>

        </div>
    )
}

export default FoodDsiplay
