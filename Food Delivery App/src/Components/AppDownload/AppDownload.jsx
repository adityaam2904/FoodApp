import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='App-download' id='App-Download'>
        <p>For Better Experiance Download <br/> Tomato App</p>
        <div className="app-download-platform">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload