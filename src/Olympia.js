import React from 'react';
import './Olympia.css';
// import './Navigation.css';
import Navigation from './Navigation';
 import Nav from './Nav'
 import ReactPlayer from 'react-player'
 

const Olympia = () => {
  return (
      <div>
         <Nav />
            <div className = 'Header1 tc mt0'> Olympia London </div>
            <div className="tc cont">
              <img src="./lon1.jpg" className ="icon ml3"/>
              <img src="./lon2.jpg" className ="icon ml3"/>
              <img src="./lon3.jpg" className ="icon ml3"/>
            </div>
            <div className="footer1">
                <a href="/Adidas">
                  <h2> Previous: Adidas x Parley</h2>
                </a>
                <a href="/Blan">
                  <h2> Next: Blanguage x Havas </h2>
                </a>
            </div>
    </div>
    
    )};



export default Olympia;