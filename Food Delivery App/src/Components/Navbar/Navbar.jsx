import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowlogin}) => {

    const[menu,setMenu]=useState("");
     
    const {getTotalCartAmt,token,setToken} = useContext(StoreContext); 

    const navigate=useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token");
        setToken(""); 
        navigate("/");

    }

  return (
    <div className='Navbar'>
     <Link to='/'> <img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")}  className={menu==="home"?"Active":" "}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"Active":" "}>Menu </a>
        <a href='#App-Download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"Active":" "}>mobile-app </a>
        <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"Active":" "}>Contact Us </a>
        </ul> 
        <div className="navbar-right">
          <img src={assets.search_icon} alt=""/>

          <div className="navbar_search_icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmt()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowlogin(true)}>Sign in</button>:<div className="nav-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
          
        </div>
    </div> 
  )
}

export default Navbar