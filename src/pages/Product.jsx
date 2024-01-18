import React, { useContext } from 'react'
import { shopContext } from '../contex/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Components/BreadCrum/BreadCrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(shopContext)
  const {productId}=useParams();
  const product = all_product.find((item)=>item.id===Number(productId))
  
  return (
    
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts/>
      
    </div>
  )
}

export default Product
