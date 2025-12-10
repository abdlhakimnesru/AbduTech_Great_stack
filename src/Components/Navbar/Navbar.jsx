import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav>
            <img src={logo} alt="AbduTech Logo" />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Compus</li>
                <li>Tesmonial</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar