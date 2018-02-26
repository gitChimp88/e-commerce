import React from 'react'
import {Different} from './api/pics'
import "./Commerce.css"

import Navbar from './Navbar'

export default class App extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					pictures: []
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
	
	
	render(){
		
		const header = {
			fontSize: "42px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway"
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