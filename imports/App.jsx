import React from 'react'
import {Different} from './api/pics'
import "./Commerce.css"
import Tick4 from './Tick4'
import Navbar from './Navbar'

export default class App extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					pictures: [],
					confirm: false
				}
		
	}
	
	
	 clicker(e){
	   debugger;
		var name = e.target.textContent
		
		if(name == "Home") {
			name = ""
		} 
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			
				
									})
	    }
	
	changeConfirm(){
		this.setState({confirm: false})	
	}
	
	
	sendEmail(e){
		debugger;
		e.preventDefault()
		var email = this.refs.email.value
		var title = this.refs.title.value
		var message = this.refs.message.value
		
		var sendTo = "Michael Sullivan <michaelksullivan50@gmail.com>"
		
		if(typeof title == "string" && typeof message == "string" && typeof email == "string" && typeof name == "string"){
			
			Meteor.call('sendEmail', sendTo, email, title, message, (error, result)=>{
				
				if(error){
					console.log(error)
				} else {
					console.log(result)
				}
                   this.refs.title.value = ""
				   this.refs.email.value = ""
				   this.refs.message.value = ""
				   this.setState({confirm: true})
				})
		}
		
	}
	
	
	render(){
		
		const header = {
			fontSize: "42px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway",
			textDecoration: "underline"
		}
		
		const style = {
			listStyle: "none",
			textAlign: "center",
			padding: "0"
		}
		
		const centers = {
			textAlign: "center",
			fontSize: "20px",
			fontFamily: "Exo 2"
			
		}
		
		const top = {
			marginTop: "50px",
			marginBottom: "30px"
		}
		
	    const cursor = {
			cursor: "pointer",
			marginBottom: "10px"
		}
		
		
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				
			    <h1 style={header}>Logo Fine Jewelry</h1>
				<div><img className="img-responsive front" src="/images/frontCover.jpg" /></div>
			  
				<h1 style={header}>Contact us!</h1>
				
			
			  
			  <div class="row">
				  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
					  <form>
						  <div className="form-group">
							  
							  <input className="form-control" type="email"  placeholder="Your Email" ref="email"/>
						  </div>                            
						  <div className="form-group">
							 
							  <input className="form-control" type="text"    placeholder="Subject" ref="title"/>
						  </div>                            
						  <div className="form-group">
							  <textarea  className="form-control" rows="5" cols="50"   placeholder="Message..." ref="message" ></textarea>                                 
						  </div>
						  <div className="text-center">
							  {this.state.confirm == false ? <button onClick={this.sendEmail.bind(this)} type="submit" className="btn btn-start-order">Send Message</button> : <Tick4 changeConfirm={this.changeConfirm.bind(this)}/>}
						  </div>
					  </form>
				  </div>
			  </div>
		
				
				<hr/>
				
				<div className="row" style={top}>
					
					
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Navigate</h4>
						<ul style={style}>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Shop</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>About</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Cart</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Sign In</li>
						</ul>
					</div>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Elsewhere</h4>
						<p className="text-center change" style={cursor}>Facebook</p>
						<p className="text-center change" style={cursor} >Instagram</p>
					</div>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Fine Print</h4>
						<p className="text-center">Legal imprint</p>
						<p className="text-center">All rights reserved</p>
						<p className="text-center"> © 2018 Logo Fine Jewelry</p>
					</div>
				</div>
				
				
				
					
			</div>
			
		)
	}
}