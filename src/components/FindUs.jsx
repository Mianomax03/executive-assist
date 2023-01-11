import React from 'react';

 
import "./findus.css"
import SubHeading from './SubHeading';
import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"






const FindUs = () =>{


return (
  
  <div id="findus" className="app__parent">

    <div className="app__findus" >
    <p className="p__cormorant flex__center" style={{marginTop:".5em"}}>"Find Us </p>
 
      <div className="app__feedback"><p>We'd love to hear from you</p>
       
        </div>
      <div className="app__info_container"  >
        <div className="app_email"> <MdEmail className='icon'/> <p>get in touch with customer support</p>
        <p >Email:mianomax03@gmail.com</p>
        </div>
        <div className="app__phone"> <FaPhoneAlt className='icon'/> Talk to us
        <p >9 W 53rd St, New York, NY 10019, USA</p>
        <p >+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
        </div>
      </div>
    </div>
  </div>
)};

export default FindUs;
