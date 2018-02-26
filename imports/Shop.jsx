import React from 'react'
import Navbar from './Navbar'
import "./Commerce.css"
import Drop2 from './Drop2'

export default class Shop extends React.Component{
	
	
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
		
		const secondheader = {
			fontSize: "30px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway",
			textDecoration: "underline"
		}
		
		const style = {
			listStyle: "none",
			display: "inline-block",
			margin: "20px",
			fontSize: "20px",
		    cursor: "pointer"
		}
		
		const sty = {
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
				<h2 style={secondheader}>Shop</h2>
				
				<ul className="text-center">
					<li style={style} className="changes">All Items</li>
					<li style={style} className="changes">Rings</li>
					<li style={style} className="changes">Bracelets</li>
					<li style={style} className="changes">Necklaces</li>
					<Drop2/>
				</ul>
				<br/>
				<hr/>
				
				
				
				<h1 className="text-center">Products go here!!</h1>
				
				<br/>
				<hr/>
				
				<div className="row" style={top}>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Navigate</h4>
						<ul style={sty}>
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