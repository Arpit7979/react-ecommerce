import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-field">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" />
        <p>Agree terms and conditions</p>
      </div>
    </div>
      
    </div>
  )
}

export default LoginSignup
