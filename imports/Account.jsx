import React from 'react'
import Navbar from './Navbar'
import "./Commerce.css"

export default class Account extends React.Component{
	constructor(){
		super()
		this.state = {
			update: false,
			details: [],
			name: '',
			address: '',
			email: ''
		}
	}
	
	
	componentDidMount(){
		
       /*
	   
	   this isnt working look into it
		Tracker.autorun(()=>{
			debugger;
			
			var user = Meteor.user()
			const name = user.profile.name
		    const address = user.profile.address
			const email = user.emails[0].address
			
			this.setState({name, address, email})
		})*/
	
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
			marginTop: "20px",
			display: "block"
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
					<h2>Details</h2>
					<p className="marg">Name: {this.state.name}</p>
					{this.state.update == true ? <input/> : null}
				    <p>UserName:</p>
					{this.state.update == true ? <input/> : null}
				    <p>Email: {this.state.email}</p>
					{this.state.update == true ? <input/> : null}
					<p>Address: {this.state.address}</p>
					{this.state.update == true ? <input/> : null}
				    <p>Phone:</p>
					{this.state.update == true ? <input/> : null}
					{this.state.update == false ? <button style={bl} className="btn btn-success" onClick={this.updateState.bind(this)}>Update details</button> : <button className="btn btn-success" style={bl} onClick={this.updateState.bind(this)}>Submit</button> }
				</div>
				
				
				
				
				
			</div>
			
		)
	}
}