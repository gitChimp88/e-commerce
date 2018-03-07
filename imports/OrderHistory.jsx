import React from 'react'
import {Orders} from './api/orders'
import Navbar from './Navbar'

export default class OrderHistory extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					orders: []
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
    
		Tracker.autorun(()=>{
			var orders = Orders.find({}).fetch()
			this.setState({orders: orders})
			
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
		
		const inline ={
			display: "inline-block",
			margin: "20px"
		}
		
		const centered = {
			textAlign: "center",
		    margin: "30px"
		}
		
		const but = {
			margin: "10px"
		}
		
		const bold = {
			fontWeight: "bold",
			fontSize: "20px"
		}
		
		return( 
			
			<div>
				<Navbar
					history={this.props.history}
					/>
				
				<div style={centers}>
							<img src="/images/orders.png"/>
					     <h1 style={header}>Order History</h1>
				</div>
				
				{this.state.orders.map((ele, i)=>{
					
					
				      if(ele.user == Meteor.userId()){
						   return (
								  <div key={i} style={centered}>
									 
									 <h4 style={inline}>Quantity: {ele.quantity}</h4>
									 <h4 style={inline}>Product: {ele.product}</h4>
									 <h4 style={inline}>Indv Price: {ele.price}</h4>
									 <h4 style={inline}>Cost: {ele.price * ele.quantity}</h4>
									 <img src={ele.url} height="200" width="200"/>
									 <p style={bold}>Shipped to: {ele.address}</p>
									 
									<hr/>
					               </div>   
						 
							 )	 
					  }
					
					
							
						
					})}
				
				
				
				
				<div style={center}>
					<button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>My Account</button>
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Shop</button>
				</div>
				
			  
			    
				
				
				
				
					
			</div>
			
		)
	}
}