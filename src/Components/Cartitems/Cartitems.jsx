import React, { useContext } from 'react'
import "./cartitem.css"
import { shopContext } from '../../contex/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"

const Cartitems = () => {
    const {all_product,cartItem,removeFromCart}=useContext(shopContext);
  return (
    <div className='cartitems'>
    <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e)=>{
        if(cartItem[e.id]>0)
        {
            return <div>
                        <div className="cartitem-format">
                            <h1>hii</h1>
                            <img src={e.image} alt="" className='cartitem-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className="cartitem-quantity">{cartItem[e.id]}</button>
                            <p>{e.new_price*cartItem[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={removeFromCart(e.id)} />
                        </div>
                        <hr />
                    </div>
        
        }
    })}
      
    </div>
  )
}

export default Cartitems
