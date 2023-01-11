import React from 'react'
import images from "../constants/images"
import "./AboutUs.css"
import Slide from 'react-reveal/Slide';

const AboutUs = () => {
  return (
    <div className="app__aboutus-content " id="about">
      <p className="p__cormorant flex__center" style={{marginTop:"1em"}}>About Us</p>
        <div className="app__aboutus">
        
          <h2 className="p__opensans">At the Executive Assist Center, we are here to offer you the personal assistance you require.
              We get it!</h2>
        </div>
     <div className="app__aboutus-flex">
          
         
          <div className= "app__aboutus-content_text" >
          <Slide left>
            <p  >
              Every organization or individuals, no matter how small, <br/>
              has daily operative and administrative tasks that need doing<br/>
              to keep things running smoothly.In line, we understand that<br/>
              it becomes difficult to keep on top of these tasks,and this 
              is when mistakes start to be made. <br/>
              
              So instead of having several employees juggling multiple admin tasks, <br/>
              it makes sense to hire one person to do them all.<br/>
              Executive Assist is your solution use our virtual assistance platform to lighten the load. </p></Slide> 
              
          </div>

          <div className="  app__aboutus-content_about" >
          <img src={images.woman} alt="about" />
          </div>
      </div>
    </div>
  )
}

export default AboutUs