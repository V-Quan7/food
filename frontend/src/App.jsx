import React from 'react'
import MenuNavbar from './components/MenuNavbar/MenuNavbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOrder/PlaceOder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <div className='app'>
        <MenuNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOder' element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
