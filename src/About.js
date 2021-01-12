import React from 'react';
import './About.css';
// import './Navigation.css';
import Navigation from './Navigation';
 import Nav from './Nav'
 import ReactPlayer from 'react-player'
 

const About = () => {
  return (

  	
  		<div>

    	<Nav />
    	<div className="workbox">
    	
    	
    	<div>
    		
      		<div className = 'Header1 tc mt0'> Blanguage x Havas</div>
      		<div className="tc cont">
      		<ReactPlayer url='https://www.youtube.com/watch?v=GsGO8iAGeU4&feature=emb_logo' />

</div>
</div>
    </div>
    </div>
    
    )};



export default About;