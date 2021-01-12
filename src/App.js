import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'
import Contact from './Contact'
import Curriculum from './Curriculum'
import Partners from './Partners'
import Blan from './Blan'
import Snips from './Snips'
import Olympia from './Olympia'
import Adidas from './Adidas'
import Gold from './Gold'
import Home from './Home'
import ThankYou from './ThankYou'
import Work from './Work'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect
} from "react-router-dom"
import {Animated} from "react-animated-css"





const App = () => {
  return(
    <BrowserRouter>
  <Switch>
  
      <Route path ={"/Home"} component={Home} />
      <Route exact path ={"/"} component={Home} />
      <Route exact path ={"/Contact"} component={Contact} />
      <Route exact path ={"/Blan"} component={Blan} />
      <Route exact path ={"/Snips"} component={Snips} />
      <Route exact path ={"/Olympia"} component={Olympia} />
      <Route exact path ={"/Adidas"} component={Adidas} />
      <Route exact path ={"/Curriculum"} component={Curriculum} />
      <Route exact path ={"/Partners"} component={Partners} />
      <Route exact path ={"/ThankYou"} component={ThankYou} />
      <Route exact path ={"/Work"} component={Work} />

    

    
     </Switch>
    
 
   

</BrowserRouter>
     )      
          
      
     
} 



export default App;
