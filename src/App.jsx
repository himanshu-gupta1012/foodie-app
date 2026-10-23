// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import FoodDetails from './Pages/FoodDetails'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import About from './Pages/About'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/fooddetails' element={<FoodDetails />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App