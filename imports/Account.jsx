import React from 'react'
import Navbar from './Navbar'
import "./Commerce.css"

export default class Account extends React.Component{
	
	
	
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
					<p>Name:</p>
				    <p>UserName:</p>
				    <p>Email:</p>
				    <p>Phone:</p>
					<button className="btn btn-success">Update details</button>
				</div>
				
				
				
				
				
			</div>
			
		)
	}
}