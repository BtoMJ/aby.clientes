import React from 'react';
import logo from '../../assets/LogoSkinCareBco.png';
import './NavBar.css'


function NavBar() {
  return (
    <div className="nav-container">

        <div className="logo-container">
            <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        
    </div>
  )
}

export default NavBar