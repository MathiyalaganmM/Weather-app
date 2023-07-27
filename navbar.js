import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='nav-first'>
      <Link to='/'>Mathi</Link>
      </div>
      <div >
      <ul className='nav1'>
        <CustomLink to="/">Home</CustomLink >
        <CustomLink to="/weather">Weather</CustomLink >
      </ul>
      </div>
    </nav>
  )
}
function CustomLink({to,children,...props}){
    const path=window.location.pathname
    console.log(path)
    // console.log(children)
    // console.log(...props)
 return(
    <li className={path===to?"active":""}>
        <Link to={to} className='point'>
         {children}
        </Link>
    </li>
 )
}