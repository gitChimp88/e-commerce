import React from 'react'
import {Starred} from './api/favourites'
import IndividualFavour from './IndividualFavour'

import Navbar from './Navbar'

export default class Favourites extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
				    favourites: []
				}
		
	}
	
	handle(e){
	 
		var name = e.target.textContent
		
		
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			 })
	    }
	
	componentWillMount(){
        debugger;
		Tracker.autorun(()=>{
			var favourites = Starred.find({}).fetch()
			this.setState({favourites: favourites})
			
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
		
		const cents = {
			textAlign: "center"
		}
		
		const cents2 = {
			display: "inline-block",
			marginLeft: "20px",
			marginRight: "20px"
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
				
				
				
				<div style={cents}>
				{this.state.favourites.map((ele, i)=>{
					
					
					if(ele.userId == Meteor.userId()){
						 return (
								  <div key={i} style={cents2}>
								   
								    <IndividualFavour
										name={ele.name}
								        url={ele.url}
									    price={ele.price}
									    id={ele._id}
										quantity={ele.quantity}
										ident={ele.productId}
										stock={ele.stock}
										sold={ele.sold}
										/>
								    </div>   
						 
							 )	 
					}
					
					
							
						
					})}
					</div>
				
				
				
				<div style={center}>
					<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>My Account</button>
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Shop</button>
				</div>
				
			  
			    
				
				
				
				
					
			</div>
			
		)
	}
}