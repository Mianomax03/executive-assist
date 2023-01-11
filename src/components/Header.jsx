import React from 'react';
import  SubHeading  from './SubHeading';
import images from '../constants/images.js'




import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="#home" >
   <div className="app__wrapper_info " >
     <SubHeading  title="Executive Assist Center "/>
     
     <h1 className="app__header-h1 ">providing efficient timely customized support</h1>
     <p className="p__opensans" style={{margin:"2rem 0" ,color:"var(--color-black)"}}>Virtual assistant at your service. We're here to help you accomplish more.  </p>
    <a href="#services"> <button type="button" className="custom__button ">Services</button></a>
   </div>
   <div className="app__wrapper_img">
      <img src={images.header} alt="header"/>
   </div>
  </div>
);

export default Header;
