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
            <div className = 'Header1 tc mt0'> Snips Music</div>
            <div className="tc cont">
                <ReactPlayer url='https://www.youtube.com/watch?v=xzJ7KXAJvNk' />
            </div>
            <div className="footer1">
                <a href="/Blan">
                  <h2> Previous: Blanguage x Havas</h2>
                </a>
                <a href="/Adidas">
                  <h2> Next: Adidas x Parley </h2>
                </a>
            </div>
    </div>
    
    )};



export default Snips;