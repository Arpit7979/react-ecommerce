import React from 'react'
import icon from "../Assets/breadcrum_arrow.png"
import "./BreadCrum.css"

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME <img src={icon} alt="" /> SHOP <img src={icon} alt="" /> {product.category} <img src={icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum
