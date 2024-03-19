import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import './Navbar.css'
import logo from './images/kms-logo.png'
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
          <img src={logo} alt='logo' height={100} width={100}/>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Users'>Users</NavLink>
        {auth.user==='admin'&& <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}