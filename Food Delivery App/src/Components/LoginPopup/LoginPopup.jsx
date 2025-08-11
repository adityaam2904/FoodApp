import React, { useContext, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"
const LoginPopup = ({setShowlogin}) => {

  const {url,setToken}=useContext(StoreContext)

  const[  currstate,setCurrstate]=useState("Sign up")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event) =>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) =>{
      event.preventDefault();
      let newUrl=url;
      if(currstate==="login"){
        newUrl+= "/api/user/login"
      }else{
        newUrl += "/api/user/register"
      }
      const response = await axios.post(newUrl,data);

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setShowlogin(false);
      }else{
        alert(response.data.message);
      }
  }
 
  return (
    <div className='loginpopup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="loginpopup-title">
          <h2>{currstate}</h2>
          <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currstate==="login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input  name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required />
        </div>  
        <button type='submit'>{currstate==="Sign up"?"Create Account":"login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing , I agree to Terms of use & privacy policy.</p>
        </div>
        {currstate==="login"? <p>Create a New Account?<span onClick={()=>setCurrstate("Sign up")}>click Here</span></p>
        :  <p>Already Have an Account?<span onClick={()=>setCurrstate("login")}> Login Here</span></p>}
       
      
      </form>
    </div>

  )
}

export default LoginPopup