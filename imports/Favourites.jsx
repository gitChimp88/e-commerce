import React from 'react'
import {Different} from './api/pics'

import Navbar from './Navbar'

export default class Favourites extends React.Component {
	
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
	
	handle(e){
	 
		var name = e.target.textContent
		
		
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			 })
	    }
	
	
	
     
	
	render(){
		
		const centers = {
			textAlign: "center",
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
		
		const center = {
			marginTop:"30px",
			textAlign: "center"
		}
		
		const but = {
			margin: "10px"
		}
		
		return( 
			
			<div>
				<Navbar
					history={this.props.history}
					/>
				
				<div style={centers}>
							<img src="/images/favourite.png"/>
					     <h1 style={header}>Favourites</h1>
				</div>
				
				<h1 className="text-center">Pics with details go here</h1>
				
				
				
				<div style={center}>
					<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>My Account</button>
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Shop</button>
				</div>
				
			  
			    
				
				
				
				
					
			</div>
			
		)
	}
}