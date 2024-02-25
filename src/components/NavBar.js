import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logoPS.jpg'
import '../styles/NavBar.css'

function NavBar(){
    return(
        <nav className="horizontal-nav">
            <Link to='/'><img src={Logo} alt="Logo"/></Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                
                <li>
                    <Link to='/about'>About Me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;