import React from 'react';
import './App.css';
import ThankYou from './ThankYou'
import {Link} from 'react-router-dom';
import Navigation from './Navigation'
import ZapierForm from 'react-zapier-form'
import Nav from './Nav'
import './Contact.css';


const Contact = () => {
	return (
		<div >
  		<div className="op1image pb5">
		 <Nav/>
		 <div className="zap ">

				<ZapierForm  action='https://hooks.zapier.com/hooks/catch/5717228/o3ntgre/' className="zap ">
   {({ error, loading, success }) => {
      return (
         <div>
            {!success && !loading &&
               <div>
               <article className="br3 ba b--black-10 mv1 zapbg shadow-5 center mw5 mw7-ns " >
			<main className="pa4 pb0 black-80 ">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		    <legend className=" Headerz  ph0 mh0">Contact Me</legend>
               		<div className="mt1">
               		<label className="fw6 lh-copyw-50 f6" for="name">Name</label>
		        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type='text' name='Name' id="name" />
               	 </div>

 
                  <div className="mt2">
		        <label className=" fw6 lh-copy w-50 f6" for="email-address">Email</label>
		        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="email" name="Email"  id="name"/>
		      </div>
                  <div className="mv2">
		        <label className=" fw6 lh-copy w-50 f6" for="number">Contact Number</label>
		        <input className="b pa1 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" name="Contact"  id="number"/>
		      </div>
  
                  <div className="mv2">
		        <label className=" fw6 lh-copy f6" for="text">Message</label>
		        <textarea rows="4" className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="text" name="Message"  id="number"></textarea>
		      </div>
		      </fieldset>
                  <button
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mb3" 
                  >Submit</button>
                  </main>
                  </article>
               </div>
            }
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong. Please try again later.</div>}
            {success && <div>

            	<article className="br3 bg-white ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center">
					<main className="pa4 black-80">
		  <form className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f1 fw6 ph0 mh0">Thank You!</legend>
		     

		    </fieldset>
		    
		   <div className="lh-copy mt3">
		      <Link to="/Home"><h3 className="f6 link dim underline pointer db">Return Home</h3></Link>
		     
		    </div>
		  </form>
		</main>
		</article>
		</div>}
         </div>
      )
   }}
</ZapierForm>

	</div>
				</div>
				</div>
			);
}

export default Contact;