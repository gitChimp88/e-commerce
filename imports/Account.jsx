import React from 'react'
import Navbar from './Navbar'
import "./Commerce.css"
import Tick4 from './Tick4'

export default class Account extends React.Component{
	constructor(){
		super()
		this.state = {
			update: false,
			details: [],
			name: '',
			address: '',
			email: '',
			confirm: false
		}
	}
	
	
	componentWillMount(){
		
       Tracker.autorun(()=>{
		   var user =  Meteor.users.find({_id:Meteor.userId()}).fetch()
		   
			debugger;
			var user = Meteor.user()
			if(user){	
				debugger
				const name = user.profile.name
		    	const address = user.profile.address
				const email = user.emails[0].address
			
				this.setState({name, address, email})
			}
		})
	
	}
	
	sendEmail(e){
		debugger;
		
		e.preventDefault()
		var email = this.state.email
		var name = this.state.name
		
		var title = this.refs.title.value
		var message = this.refs.message.value
		
		var sendTo = "Michael Sullivan <michaelksullivan50@gmail.com>"
		
		if(typeof title == "string" && typeof message == "string"){
			
			Meteor.call('sendEmail', sendTo, email, title, message, (error, result)=>{
				
				if(error){
					console.log(error)
				} else {
					console.log(result)
				}
                   this.refs.title.value = ""
				   this.refs.message.value = ""
				  this.setState({confirm: true})
				})
		}
		
	}
	
	changeConfirm(){
		this.setState({confirm: false})	
	}
	
	
	handle(e){
	 
		var name = e.target.textContent
		
		if(name == "View Cart") {
			name = "Cart"
		} 
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			 })
	    }
	
	updateState(){
		var update = this.state.update
		this.setState({update: !update})
	}
	
	updateProfile(){
		debugger;
		var name = this.refs.name.value
		var address = this.refs.address.value
		var id = Meteor.userId()
		
		var sameAdd = this.state.address
		var sameName = this.state.name
		
		if(name && address){
			Meteor.call('updateUser', id, name, address, ()=>{
                   this.refs.name.value = ""
				   this.refs.address.value = ""
				})
		} if(name && address == ""){
			Meteor.call('updateUser', id, name, sameAdd,  ()=>{
                   this.refs.name.value = ""
				})
		
		} if(address && name == ""){
			
			Meteor.call('updateUser', id, sameName, address,  ()=>{
                   this.refs.address.value = ""
				})
		
		}
		
		
		
		var update = this.state.update
		this.setState({update: !update})
	}
	
	     
	
	
	
	render(){
		
		const head = {
			fontSize: "30px",
			border: "2px solid black",
			textAlign: "center",
			fontFamily: "Exo 2",
			backgroundColor: "azure"
		}
		
		const block = {
			display: "inline-block",
			marginBottom: "15px",
			marginTop: "20px"
		}
		
		const centers = {
			textAlign: "center",
		}
		
		const but = {
			display: "block",
			margin: "0 auto"
		}
		
		const bl = {
			display: "block",
			margin: "0 auto",
			marginTop: "20px"
         }
		
		const marg = {
			marginTop: "20px"
		}
		
		const header = {
			fontSize: "42px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway",
			textDecoration: "underline"
		}
		
		const boxes = {
			    height: "35px",
              	width: "250px",
    			borderRadius: "5px",
				backgroundColor: "azure",
			    display: "block",
			    margin: "0 auto",
		        marginTop: "10px"
		  }
		
		
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1 style={head}>My Account</h1>
				
				
				
				<div className="row">
					<div className="col-md-4 col-sm-4">
						<div style={centers}>
							<img style={block} src="/images/cart.png"/>
							<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>View Cart</button>
						</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div style={centers}>
							<img style={block} src="/images/orders.png"/>
							<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Orders</button>
						</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div style={centers}>
							<img style={block} src="/images/favourite.png"/>
							<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Favourites</button>
						</div>
					</div>
				</div>
				
				<div className="details">
					<h2>Profile Details</h2>
					<p className="marg">Name: {this.state.name}</p>
					{this.state.update == true ? <input ref="name"/> : null}
				    
				    <p>Email: {this.state.email}</p>
					{this.state.update == true ? <input ref="email"/> : null}
					<p>Address: {this.state.address}</p>
					{this.state.update == true ? <input ref="address"/> : null}
				    
					{this.state.update == false ? <button style={bl} className="btn btn-success" onClick={this.updateState.bind(this)}>Update details</button> : <button className="btn btn-success" style={bl} onClick={this.updateProfile.bind(this)}>Submit</button> }
				</div>
				
				
				<hr/>
				
				<div style={centers}>
							<img src="/images/email.png"/>
					        <h1 style={header}>Send us an email!</h1>
					
					     <div className="row">
				  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
					  <form>
						  <div className="form-group">
							 
							
							 
							  <input ref="title" className="form-control" type="text"    placeholder="Subject"/>
						  </div>                            
						  <div className="form-group">
							  
							  <textarea ref="message" className="form-control" rows="5" cols="50"   placeholder="Message..."></textarea>                                 
						  </div>
						  <div className="text-center">
							  {this.state.confirm == false ? <button type="submit" className="btn btn-start-order" onClick={this.sendEmail.bind(this)}>Send Message</button> : <Tick4 changeConfirm={this.changeConfirm.bind(this)}/>}
							  
							  
						  </div>
					  </form>
				  </div>
			  </div>
					
						
					<br/>
					<br/>
				</div>
				
				
			</div>
			
		)
	}
}