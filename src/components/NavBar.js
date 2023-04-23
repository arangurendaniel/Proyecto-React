import React from 'react';
import '../stylesheets/Navbar.css'
import logo from '../imagenes/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <img src={logo} alt="logo" />
        </div>
        <ul className='links-conatiner'>
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Contacto</li>
        </ul>
        <CartWidget /> 
    </div>
  )
}

export default NavBar