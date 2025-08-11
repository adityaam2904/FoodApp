import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from "../../../assets/assets";
const Exploremenu = ({category,setCategory}) => {
  return (
   <div className="explore-menu" id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose From A diversified Menu your's Faourite Food</p>
      <div className="explore_menu_list">
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}  className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
   </div>
  )
}

export default Exploremenu