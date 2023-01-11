import React from 'react'
import "./Services.css"
import {FaSlackHash } from "react-icons/fa";
import {FaCogs } from "react-icons/fa";
import {FaDesktop } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import {FaBuffer } from "react-icons/fa";
import {FaPennyArcade } from "react-icons/fa";




const services = () => {
  return (
  <>
  
 
    <div className="app__services" id="services">
      <p className="p__cormorant flex__center" style={{marginTop:"1em"}}> Services $pricing </p>
   
     
      <div className="app__services-admin  ">
      <div className="app__administrative_support"><h1 className="headtext__cormorant "> <FaSlackHash  /> Administrative Support</h1></div>
      <div className="app__administrative_description"><p>An Administrative Assistant is a supportive role in an office.
        They are responsible for managing and distributing information among their co-workers, answering phones, and doing other administrative work.
        our Administrative assistants are Knowledgeable of office management systems and procedures
        </p>
        </div>
        <div className="app__administrative_price"><button className="custom__button flex" >$1O</button></div>
        
      
      </div>
        
      
      <div className="app__services-customer ">
         <div className="app__customer_support"><h1 className="headtext__cormorant"> <FaCogs/> Customer Support</h1></div>
        
        <div className="app__support_description"><p>
        Our Customer Service Specialists process complaints and issues related to products or services. 
        To enhance customer experience, they help customers complete purchases,
         upgrades/returns and frequently provide necessary technical assistance.</p></div>
        <div className="app__support_price"><button className="custom__button flex">$1O</button></div>
        
        </div>
      <div className="app__services-project">
        <div className="app__project_managment"><h1 className="headtext__cormorant"> <FaDesktop/> Project Managment</h1></div>
       
        <div ><p>A project manager is responsible for planning and overseeing projects within an organisation, 
          from the initial ideation through to completion. 
          They coordinate people and processes to deliver projects on time, 
          within budget and with the desired outcomes aligned to objectives.</p></div>
        <div> <button className="custom__button">$1O</button></div>
       
        
        </div>
      <div className="app__services-social ">
        <div><h1 className="headtext__cormorant"> <FaTwitter/> Social Media Managment</h1></div>
        <div><p>Our Social Media Manager is responsible for overseeing a company’s interactions with the public
           by implementing social media platforms’ content strategies. 
           Their duties include analyzing engagement data, identifying trends in customer 
           interactions and planning digital campaigns to build community online.</p></div>
        <div><button className="custom__button">$1O</button></div>
        
        
        </div>
      <div className="app__services-text ">
        <div><h1 className="headtext__cormorant">  <FaBuffer/> Data & Reserch</h1></div>
        <div><p>The role of our Data Research Analyst is to conduct research, 
          collect and manage data and databases, and develop the data and result into a format 
          easily representable to other employees, investors, and other researchers.</p></div>
        <div> <button className="custom__button">$1O</button></div>
        
       
        </div>
      <div className="app__services-personal ">
        <div> <h1 className="headtext__cormorant"> <FaPennyArcade/> Personal Assist</h1></div>
        <div><p>Personal Assistants perform a variety of administrative tasks for an individual.
           Here are some common responsibilities of a Personal Assistant:
               Schedule meetings and manage calendars
                Take accurate and comprehensive notes at meetings
                Help with daily time management 
               Answer phone calls and emails and take messages
                Run errands as requested
               Plan travel, including flights, accommodation and ground transportation
                Coordinate events and speaking engagements
                Draft correspondence such as emails and letters
           </p></div>
        <div> <button className="custom__button">$1O</button></div>
       
       
        </div>
    </div ></>
  )
}

export default services