import React, { useState } from 'react'
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from './UserAuthContext';
import { Alert } from 'react-bootstrap';

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const {signUp} = useUserAuth();


  const onHandleSubmit = async (e)=>{
    e.preventDefault()
    setError("") 

    try{
      await signUp(email, password)
      navigate("/")
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div className="Auth-form-container">
      {error && <Alert>{error}</Alert>}
      <form className="Auth-form" onSubmit={onHandleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up Form</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(event)=> setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(event)=> setPassword(event.target.value)}

            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Don't have an account? <Link to="/">login</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignUp