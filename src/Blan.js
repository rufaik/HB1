import React from 'react';
import './Blan.css';
// import './Navigation.css';
import Navigation from './Navigation';
 import Nav from './Nav'
 import ReactPlayer from 'react-player'
 

const Blan = () => {
  return (
  		<div>
    	   <Nav />
            <div className = 'Header1 tc mt0'> Blanguage x Havas</div>
            <div className="tc cont">
        		    <ReactPlayer url='https://www.youtube.com/watch?v=GsGO8iAGeU4&feature=emb_logo' />
            </div>
            <div className="footer1">
                <a href="/Olympia">
                  <h2> Previous: Olympia </h2>
                </a>
                <a href="/Snips">
                  <h2> Previous: Snips </h2>
                </a>
            </div>
    </div>
    
    )};



export default Blan;