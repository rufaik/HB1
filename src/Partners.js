import React from 'react';
import './Logo.css';
import './Partners.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import Nav from './Nav'


 

const Partners = () => {
  return (
  	<div>
  <div className = 'Pcontainer'>
     <div className = 'first'>
     <a href="/About">
      <div className = 'bb Pitem iblue'>a
      <p class="description f3">
        bout
       </p>
      </div>
      </a>
      <a href="/Work">
      <div className = 'br Pitem ipink'>s
      <p class="description f3">
        ervices
       </p>
       </div>
       </a>
    </div>
     <div className = 'first'>
     <a href="/Work">
      <div className = 'Pitem bl iyellow'>w
      <p class="description f3">
        ork
       </p>
       </div>
       </a>
       <a href="/Contact">
      <div className = 'Pitem bt igreen'>c
      <p class="description f3">
        ontact
       </p>
       </div>
       </a>
    </div>
 
    
 </div>

</div>

  

  );
    };



export default Partners;

