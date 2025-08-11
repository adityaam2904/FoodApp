import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import  { StoreContext } from '../../Context/StoreContext.jsx'
const Fooditem = ({id,name,price,description,image}) => {

  const {cartItems,addCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food_item'> 
      <div className="food_item_image_container">
        <img className='food_item_image' src={url+"/images/"+image}  />
        {!cartItems[id] 
        ?<img className='add' onClick={()=>addCart(id)} src={assets. add_icon_white}/> :
            <div className="item_counter">
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
                <img onClick={()=>addCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem