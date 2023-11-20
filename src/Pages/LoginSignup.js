import React from 'react'
import "./CSS/LoginSignup.css"
import SetCookie from '../hooks/SetCookie'
import RemoveCookie from '../hooks/RemoveCookie'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  const ckecklogin = ()=> {
    RemoveCookie("user")
    SetCookie("user", "Demessie")
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <Link to="/profile"><button onClick={ckecklogin}>Continue</button></Link>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="lgoinsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
