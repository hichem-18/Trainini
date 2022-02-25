import React,{useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../images/Trainini logo white.png';
import {Link} from 'react-scroll';
import './navbar.css';

function Navbar() {
    const [nav,setnav] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=50){
            setnav(true);
        }
        else{
            setnav(false);

        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
      <nav className={nav ? "nav active" : "nav"}>
          <Link to='main' className='logo'>
              <img src={logo} alt="" />
              </Link>
              <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='="menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
            <li>
                    <Link to='main' smooth={true} duration={1000}>Home</Link>
                </li>
                <li>
                    <Link to='offer' smooth={true} duration={1000}>Coaching</Link>
                </li>
            <li>
                    <Link to='features' smooth={true} duration={1000}>Features</Link>
                </li>
                
               
                <li>
                    <Link to='blog' smooth={true} duration={1000}>Blog</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={1000}>About Us</Link>
                </li>
                <li>
                    <Link to='Login' smooth={true} duration={1000}>Log in</Link>
                </li>
               
            </ul>
            
            <div className="  gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className=" gpt3__navbar-menu_container-links">
            <p><a href="#main">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#offer">Coaching</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#about">About Us</a></p>
          </div>
 
        </div>
        )}
      </div>
      </nav>
  )
}

export default Navbar;
