import React, {useState} from 'react';
import images from '../constants/images.js'
import Login from './Login';
// import ReactSwitch from 'react-switch';
import {FaHome} from "react-icons/fa"
import {FcAbout,FcServices} from "react-icons/fc"
 import {HiLocationMarker} from "react-icons/hi"

import{GiHamburgerMenu} from 'react-icons/gi'; 
import {AiFillCloseCircle} from'react-icons/ai'

import './Navbar.css';

const Navbar = (props) => {
 const [toggleMenu,setToggleMenu]=useState(false )
 

  return(
<nav className= "app__navbar ">
  <div className="app__navbar-logo ">
     <img src={images.logo} alt="app-logo"/>
  </div>
  <ul className="app__navbar-links ">
    <li className="p__opensans"><a href="#home">Home <FaHome/></a></li>
    <li className="p__opensans"><a href="#about">About <FcAbout/></a></li>
    <li className="p__opensans"><a href="#services">Services & Pricing <FcServices/></a></li>
    <li className="p__opensans"><a href="#findus">Find Us <HiLocationMarker/></a></li>
  </ul>
  <div className="app__navbar-login">
    <Login/>    
  </div>
  <div className="app__navbar-smallscreen">
    <GiHamburgerMenu className="icon"  fontSize={27} onClick={()=> setToggleMenu(true)}/>
     {toggleMenu &&(
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <AiFillCloseCircle  fontSize={27} className="overlay__close" onClick={()=> setToggleMenu(false)}/>
    
    <ul className="app__navbar-smallscreen-links">
    <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home <FaHome/></a></li>
    <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>About <FcAbout/></a></li>
    <li className="p__opensans"><a href="#services" onClick={() => setToggleMenu(false)}>Services & Pricing <FcServices/></a></li>
    <li className="p__opensans"><a href="#findus" onClick={() => setToggleMenu(false)}>Find Us <HiLocationMarker/></a></li>
    </ul>
    </div>
    )}

  </div>
  
 
  </nav>
)
};

export default Navbar;
