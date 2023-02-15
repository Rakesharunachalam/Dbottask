import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
    <div className='navBar'>
        <img className='logo' alt='loading...' src='./pic1.jpg'></img>
        <h1 className='company-name'>Sell Do Software</h1>
    </div>
    <div className='menu-item'>
    <ul className='nav-links'>
        <Link to="/AddUser">Add User</Link>
        <Link to="/ViewUser">View User</Link>
        <Link to="/Product">Products</Link>
        <Link to="/Customer">Customer</Link>
    </ul>
   </div> 
    </div>
    

  )
}

export default Home