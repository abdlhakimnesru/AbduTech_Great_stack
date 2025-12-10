import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="container">
            <img src={logo} alt="AbduTech Logo" className="logo" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Compus</li>
                <li>Tesmonial</li>
                <li> <button className="btn">Contact</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar