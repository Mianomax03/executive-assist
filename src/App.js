import React from 'react';
// import {Routes,Route} from "react-router-dom"
import {useState,createContext} from "react"
import ReactSwitch from 'react-switch';



//import { AboutUs,  FindUs, Footer,  } from './components';
import './App.css';
import AboutUs from './components/AboutUs';
import FindUs from './components/FindUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Header from './components/Header';


export const ThemeContext = createContext(null);

const App = ()=>{
    const [theme,setTheme]= useState("light");

     const toggleTheme =()=>{
    setTheme((curr)=>(curr === "light" ? "dark"  :"light"))
  };
  
  return(
   <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="app" id={theme} > 
      {/* <Login/>  */}
      <Navbar />
      <Header/>
      <AboutUs />
      <Services/>
      <FindUs />
      
        {/* <Routes>
      
          <Route path="/" element={<Header/>}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={ <Services/>}/>
          <Route path="/findus" element={ <FindUs />}/>       
        </Routes> */}
        <Footer />
        </div>
        <div>
        <label>{theme==="light" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>
      </div>
        </ThemeContext.Provider>
)};


export default App;
