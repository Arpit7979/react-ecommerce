import React from 'react'
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <div className='newsletter-box'>
    <h1>Get Exclusive offer on your mail</h1>
    <p>Subscribe to our news letter and stay upadated</p>
    <div>
        <input type="email" name="email" placeholder='Enter your email' />
        <button>Subscribe</button>
    </div>
    </div>
    </div>
  )
}

export default NewsLetter
