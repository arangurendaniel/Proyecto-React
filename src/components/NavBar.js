import React from 'react';
import '../stylesheets/Navbar.css'
import logo from '../imagenes/logo-nuevo-dos.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
        <div className='logo-container'>
          <Link to={"/"}>
            <img className='logo' src={logo} alt="logo" />
          </Link>
        </div>
        <ul className='links-conatiner'>
            <li>
              <Link className='linki' to={"/"} >Inicio</Link>
            </li>
            <li className='contenedor-submenu'>
              <Link className='linki' to={"/tienda"} >Tienda</Link>
              <ul className='sub-menu'>
                <li><Link className='linki' to={"/tienda/Tazas"}>Tazas</Link></li>
                <li><Link className='linki' to={"/tienda/Vasos"} >Vasos</Link></li>
                <li><Link className='linki' to={"/tienda/Funkos"} >Funkos</Link></li>
              </ul>
            </li>
            <li>
              <Link className='linki' to={"/nosotros"}>Nosotros</Link>
            </li>
            <li>
              <Link className='linki' to={"/contacto"} >Contacto</Link>
            </li>
        </ul>
        <CartWidget /> 
    </nav>
  )
}

export default NavBar