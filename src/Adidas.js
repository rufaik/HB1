import React from 'react';
import './Blan.css';
// import './Navigation.css';
import Navigation from './Navigation';
 import Nav from './Nav'
 import ReactPlayer from 'react-player'
 

const Snips = () => {
  return (
      <div>
         <Nav />
            <div className = 'Header1 tc mt0'> Adidas x Parley </div>
            <div className="tc cont">
              <img src="./adidas.jpg" className ="icons"/>
            </div>
            <div className="footer1">
                <a href="/Snips">
                  <h2> Previous: Snips Music</h2>
                </a>
                <a href="/Olympia">
                  <h2> Next: Olympia </h2>
                </a>
            </div>
    </div>
    
    )};



export default Snips;