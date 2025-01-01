import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDsiplay from '../../components/FoodDsiplay/FoodDsiplay'
import FoodItem from '../../components/FoodItem/FoodItem'
import AppDownload from '../../components/AppDownload/AppDownload'
import NoFooter from '../../components/NoFooter/NoFooter'


const Home = () => {
    const [category, setCategory] = useState('ALL')
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDsiplay category={category} />
            <AppDownload />
            <NoFooter category={category} setCategory={setCategory} />
        </div>
    )
}
export default Home
