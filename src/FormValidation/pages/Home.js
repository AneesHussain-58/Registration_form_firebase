import React from 'react'
import { useUserAuth } from '../UserAuthContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const Home = () => {
    const {user, logOut} = useUserAuth();
    console.log(user)

    const handleLogOut = async()=>{
      try{
        await logOut();
      }
      catch(err){
        console.log(err.message)
      }
    }

  return (
    <Card style={{width: "20rem",height: "12rem" , margin: "auto", marginTop: "13rem"}}>
      <div className='m-auto'>This is the home page {user?.email}</div>
      <button className='btn btn-primary' onClick={handleLogOut}>Sign Out</button>
    </Card>
  )
}

export default Home
