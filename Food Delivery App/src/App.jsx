import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Cart/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Cart/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import Myorders from './Pages/MyOrders/Myorders'

const App = () => {

const[showlogin,setShowlogin]=useState(false)


  return (
    <>
    {showlogin?<LoginPopup setShowlogin={setShowlogin}/>:<></>}
    <div className='App'>
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<Placeorder/>}></Route> 
         <Route path='/verify' element={<Verify></Verify>}></Route>  
         <Route path="/myorders" element={<Myorders></Myorders>}></Route>    
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App