import React, { useState } from 'react'
import "./Home.css"
import Header from '../../../Components/Navbar/Header/Header'
import Exploremenu from '../../../Components/Navbar/ExploreMenu/Exploremenu'
import FoodDisplay from '../../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../../Components/AppDownload/AppDownload'
const Home = () => {

  const[category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home