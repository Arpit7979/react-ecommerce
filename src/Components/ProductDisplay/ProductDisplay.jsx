import React, { useContext } from 'react'
import './ProductDisplay.css'
import b_star from "../Assets/star_icon.png"
import d_star from "../Assets/star_dull_icon.png";
import { shopContext } from '../../contex/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(shopContext)
  return (
    <div className='productDisplay'>
    <div className="productDisplay-left">
      <div className="productDisplay-img-list">
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />

      </div>
      <div className="productDisplay-img">
      <img className='productDisplay-img-main' src={product.image} alt="" />     
      </div>

    </div>
    <div className="productDisplay-right">
    <h1>{product.name}</h1>
    <div className="star">
        <img src={b_star} alt="" />
        <img src={b_star} alt="" />
        <img src={b_star} alt="" />
        <img src={b_star} alt="" />
        <img src={d_star} alt="" />
        <p>(140)</p>
    </div>
    <div className="right-prices">
        <div className="right-price-old">${product.old_price}</div>
        <div className="right-price-new">${product.new_price}</div>
    </div>
    <div className="right-disc">
    MARKRICH 100% Cotton Slim Fit Casual Shirt, Full Sleeves for Casual & Formal Wear
    </div>
    <div className="right-size">
        <h1>Select Size</h1>
        <div className="right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>

    </div>
      
    </div>
  )
}

export default ProductDisplay
