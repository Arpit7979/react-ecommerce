import React from 'react'
import "./RelatedProducts.css"
import Item from '../Item/Item'
import data_product from "../Assets/data"


const RelatedProducts = () => {
  
  return (
    <div className='relatedproducts'>
    <h1>Some More Collections</h1>
    <div className="related-products">
        {data_product.map((item,i)=>{
            return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
    </div>
      
    </div>
  )
}

export default RelatedProducts
