import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import insta from "../Assets/instagram_icon.png"
import pint from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
    </div>
      <ul>
        <li className='footer-link'>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={insta} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={pint} alt="" />
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright Arpit Singh @2024</p>
      </div>
    </div>
  )
}

export default Footer
