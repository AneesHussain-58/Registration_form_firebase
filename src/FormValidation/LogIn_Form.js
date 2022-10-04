import React, { useState } from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from './UserAuthContext';
import { Alert } from 'react-bootstrap';
import GoogleButton from 'react-google-button'

const LogIn_Form = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const {logIn, googleSignIn} = useUserAuth();

  const handleSubmit = async (event)=>{
    event.preventDefault();

    try{
      await logIn(email,password)
      setError("")
      navigate("/home")
    }
    catch(err){
      setError(err.message)
    }
  }

  const handleGoogleSignIn= async (e)=>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/home")
    } 
    catch(err){
      setError(err.message)
    }
  }

  return (
    <div className="Auth-form-container">
      {error && <Alert >{error}</Alert>}
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className='d-grid gap-2 mt-3'>
            <GoogleButton className="g-sm-btn w-100" variant='dark' onClick={handleGoogleSignIn}/>
          </div>
          <p className="forgot-password text-right mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LogIn_Form