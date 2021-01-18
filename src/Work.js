import React from 'react';
import './Work.css';
import Navigation from './Navigation';
 import Nav from './Nav1'
 

const Work = () => {
  return (

  	<div className="bgimage">
  		<div className="opimage pb5">

    	<Nav />
    	<div className="workbox">
    	<img  alt='orange' src='./tri.png' className ='imgrotate w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate1 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate2 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate3 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate4 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate5 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate6 w2 w4-ns'/>
    	<img  alt='orange' src='./tri.png' className ='imgrotate7 w2 w4-ns'/>
    	
    	<div>
    		
      		<div className = 'Header tc mt0'> Work</div>
      	</div>
      	<div className="imagebox">
      	<div>
      		<div className="iconbox">
      			<img src="./long3.jpg" className ="icons mr5"/>
      		</div>
      		<div className="bb b--orange mt2 bw2 mr5"></div>
      		<h2 className="mr5 f1 workbox1 fw7"> Olympia London </h2>
      		<h2 className=" mr5 fw1 f5 ">"Legacy is but continuity of superb creativity, an <br></br>eternal solace,a people's place....."</h2>
      		<a href="/Olympia">
      			<h2 className="mr5 read f5">Read more</h2>
      		</a>
      	</div>

      		<div></div>
      	<div>
      		<div className="iconbox">
      			<img src="./blan2.jpg" className ="icons ml5"/>
      		</div>
      		<div className="bb b--orange mt2 bw2 ml5"></div>
      		<h2 className="workbox1 f1 ml5 fw7"> Blanguage x Havas </h2>
      		<h2 className="ml5 fw1 f5">"The Day is new, listen,observe and reset your view...."</h2>
      		<a href="/Blan">
      			<h2 className="ml5 read f5">Read more</h2>
      		</a>
      	</div>
      	</div>


      	<div className="mt5 imagebox">
      	<div>
      		<div className="iconbox">
      			<img src="./product.jpg" className ="icons mr5"/>
      		</div>
      		<div className="bb b--orange mt2 bw2 mr5"></div>
      		<h2 className="workbox1 f1 mr5 fw7"> Snips Music </h2>
      		<h2 className="mr5 fw1 f5">"The ones that find tracksuit wearing private school<br></br> tough guys hilarious..."</h2>
      		<a href="/Snips">
      			<h2 className="mr5 read f5">Read more</h2>
      		</a>
      	</div>

      		<div></div>
      	<div>
      		<div className="iconbox">
      			<img src="./parley.jpg" className ="icons ml5"/>
      		</div>
      		<div className="bb b--orange mt2 bw2 ml5"></div>
      		<h2 className="workbox1 f1 ml5 fw7"> Adidas x Parley </h2>
      		<h2 className="ml5 fw1 f5">"Distance grants ignorance and how far is the oceans<br></br> tolerance no one really knows..."</h2>
      		<a href="/Adidas">
      			<h2 className="ml5 read f5">Read more</h2>
      		</a>
      	</div>
      	</div>
      	</div>
    </div>
    </div>
    )};



export default Work;