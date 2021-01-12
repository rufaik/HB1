import React from 'react';
import Card from './Card'
import './App.css';
import './Me.css'
import './Home.css'
import './Complete.css'
import './Navigation.css'
import CardList from './CardList'
import { main } from './main'
import LogoHeader from './Logo header'
import Navigation from './Navigation'
import 'tachyons';
import {Link} from 'react-router-dom';
import Logo from './Logo'
import './Logo.css';
import Gold from './Gold'
import {Animated} from "react-animated-css"
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import Partners from './Partners'

const Nav = () => {



  return (
  	<div class="a">
    <nav class="navbar navbar-expand-lg navbar-light frontfont  ">
  <a class="navbar-brand" href="/Home"><h1 class="f black f5">W.B.S</h1></a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</nav>


<input type="checkbox" id="op"></input>
<div class="lower">
  <label for="op">MENU</label>
</div>
<div class="overlay overlay-hugeinc">
      <label for="op"></label>
      <nav>
        <Partners />
      </nav>
</div>


</div>

)}

export default Nav;


