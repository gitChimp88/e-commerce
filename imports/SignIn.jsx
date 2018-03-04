import React from 'react'
import Navbar from './Navbar'
import Tick2 from './Tick2'
import "./Commerce.css"

export default class SignIn extends React.Component{
	
	constructor(){
		super()
		this.state = {
			admin:true,
			success: false
		}
		this.createProfile = this.createProfile.bind(this)
		this.change = this.change.bind(this)
	}
	
	handleSubmit(){
			
			var email = this.refs.email.value
			var password = this.refs.password.value
			
			console.log(email, password)
			
			
			
			Meteor.loginWithPassword( 
					{email},password,(err=>{
						  if(err){
							  //handle error
							  //try putting a debugger here to start with so that
							   //you can see what the error is.
							  debugger;
					
						  }else{
					  //handle success 
					  //maybe displaying a success message?
							  this.setState({success: true})
							  this.refs.email.value = ''
							  this.refs.password.value = ''
						  }
					})
			)       
			
		
		     
		}
        
	change(){
		debugger;
		//Meteor.users.update({_id:Meteor.userId()}, { $set: {'roles': "moderator"} });
		//var id = Meteor.userId();
		//var role = "admin"
		//Meteor.call('createRole', id, role)
		
		
	}
	
	
	registerUser(){
		debugger;
		var email = this.refs.registeremail.value.trim()
		var password = this.refs.registerpassword.value.trim()
		var name = this.refs.name.value.trim()
		var address = this.refs.address.value
		
		Meteor.call('createUserInServer', email, password, name, address)
		
		this.refs.registeremail.value = ""
		this.refs.registerpassword.value = ""
		this.refs.name.value = ""
		this.refs.address.value = ""
		
		
	}
	
	changeClicked(){
		this.setState({success: false})
	}
	
	createProfile(){
		var role = "admin"
		var userId = Meteor.userId()
		var email = this.refs.registeremail.value.trim()
		
		
		
		Meteor.call("addProfileInfo", userId, name, email, role)
		
		this.refs.registeremail.value = ''
		this.refs.registerpassword.value = ''
	}
	
	
	render(){
		
		const head = {
			fontSize: "30px",
			border: "2px solid black",
			textAlign: "center",
			fontFamily: "Exo 2",
			backgroundColor: "azure"
		}
		
		const inline = {
			display: "inline-block",
			margin: "10px",
			fontFamily: "Exo 2"
		}
		
		const inlines = {
			display: "inline-block",
			margin: "24px",
			fontFamily: "Exo 2"
		}
		
		const boxes = {
			    height: "35px",
              	width: "250px",
    			borderRadius: "5px",
				backgroundColor: "azure"
		  }
		
		const marg = {
			marginBottom: "10px",
			marginTop: "10px",
			fontSize: "20px",
			fontFamily: "Exo 2"
		}
		const but = {
			width: "100px",
			marginTop: "10px"
		}
		
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1 style={head}>Sign In</h1>
				<br/>
				<div className="text-center" style={marg}>
					<h4 style={inlines}>Email</h4>
				     <input ref="email" style={boxes}/>
				</div>
				
				<div className="text-center">
					<h4 style={inline}>Password</h4>
				    <input type="password" ref="password" style={boxes}/>
				</div>
				
				<div className="text-center" style={marg}>
					<button onClick={this.handleSubmit.bind(this)} className="btn btn-success" style={but}>Sign In</button>
				</div>
				
				{this.state.success == true ? <Tick2 changeClicked={this.changeClicked.bind(this)}/> : null}
				
				
				<hr/>
				
				<h2 style={head}>Not Registered? Sign up Below ↓↓↓</h2>
				
			        <div className="text-center">
						<h4 style={marg} >Name</h4>
				        <input ref="name" style={boxes}/>
				    </div>
				
				    <div className="text-center">
						 <h4 style={marg} >Email</h4>
				    <input ref="registeremail" style={boxes}/>
				    </div>
				
				    <div className="text-center">
						<h4 style={marg} >Password</h4>
				    <input type="password" ref="registerpassword" style={boxes}/>
				    </div>
				
				    <div className="text-center">
					  <h4 style={marg} >Address</h4>
				     <textarea rows="4" cols="50" style={boxes} ref="address"></textarea>
				    </div>
				
				
				<div className="text-center" style={marg}>
					<button onClick={this.registerUser.bind(this)} className="btn btn-success" style={but}>Submit!</button>
					
				</div>
				
				
				
			</div>
				
				
				
			)
	}
}