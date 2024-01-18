import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext= createContext(null);

const getDefaultCart = ()=>{
   let cart={};
    for (let i = 0; i < all_product.length+1; i++) {
          cart[i]=0;
    }
    return cart;
}


const ShopContextProvider = (props)=>{
    const [cartItem,setCartItem]= useState(getDefaultCart())
    
    
    const addToCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={all_product,cartItem,addToCart,removeFromCart};

    return (
        <shopContext.Provider value={contextValue} >
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;