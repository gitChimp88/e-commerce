import React from 'react'
import {Products} from './api/pics'
import {ShoppingCart} from './api/ShoppingCart'
import "./Commerce.css"




export default class Checkout extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					cart: [],
					productId: [],
					subtotal: [],
					signedIn: false
				}
		
	}
	
	
	handle(e){
	 
	   
		
		  var url = "/Cart"
			
		    this.props.history.push({
				pathname: url,
			 })
	    }
	
	
	
	componentWillMount(){
        
		Tracker.autorun(()=>{
			var cart = ShoppingCart.find({}).fetch()
			this.setState({cart: cart})
			
		})
		
	}
	
	
	
	
	
	componentDidMount(){
		
		const cart = this.state.cart
		cart.map((item)=>{
			var total = this.state.subtotal
			total.push(parseInt(item.price))
			this.setState({subtotal: total})
		})
		
		var sum = this.state.subtotal.reduce((a, b) => a + b, 0);
		var total = parseInt(sum)
		this.setState({subtotal: total})
	}
	
	
	
	checkOut(){
		//this updates stock and clears the cart, should be activated after payment
		const cart = this.state.cart
		
		cart.map((item)=>{
			var updateStock = item.stock - item.quantity;
			var productId = item.productId;
			var ident = item._id;
			var sold = item.sold + item.quantity;
			
			Meteor.call('updateStock', productId, updateStock, sold, (err,done)=>{
                        console.log(err,done)
                })
			
		    ShoppingCart.remove({_id:ident})
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
		
		const centered = {
			textAlign: "center",
		    margin: "30px"
		}
		
		const subtotal = {
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "30px",
			
		}
		
		const inline ={
			display: "inline-block",
			margin: "20px"
		}
		
		const boxes = {
			    height: "35px",
              	width: "250px",
    			borderRadius: "5px",
				backgroundColor: "azure",
			    display: "block",
			    margin: "0 auto"
		  }
		
		
		
		return( 
			
			<div>
				
				
				<div style={centers}>
							<img src="/images/register.png"/>
					     <h1 style={header}>Checkout</h1>
				</div>
				
				<hr/>
				{this.state.cart.map((ele, i)=>{
					
					
					console.log(this.state.cart)
					
					
							 return (
								  <div key={i} style={centered}>
									 
									 <h4 style={inline}>Quantity: {ele.quantity}</h4>
									 <h4 style={inline}>Product: {ele.name}</h4>
									 <h4 style={inline}>Indv Price: {ele.price}</h4>
									 <h4 style={inline}>Cost: {ele.price * ele.quantity}</h4>
									 <img src={ele.url} height="200" width="200"/>
									 
									 
									<hr/>
					               </div>   
						 
							 )	 
						
					})}
				
			
				
				<h4 style={subtotal}>SubTotal: £{this.props.location.state.subtotal} </h4>
				
				<hr/>
				
				<div>
				 <h1 style={header}>Shipping Details</h1>
					<p style={center}>Name:</p>
					{this.state.signedIn == false ? <input style={boxes}/> : null}
					<p style={center}>Email:</p>
					{this.state.signedIn == false ? <input style={boxes}/> : null}
					<p style={center}>Address:</p>
					{this.state.signedIn == false ? <textarea rows="4" cols="50" style={boxes}></textarea> : null}
					<p style={center}>Telephone:</p>
					{this.state.signedIn == false ? <input style={boxes}/> : null}
				
				</div>
				
				<div style={center}>
					<button className="btn btn-success" style={but} onClick={this.checkOut.bind(this)}>Pay with Card</button>
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Back</button>
				</div>
				
			  
			    
				
				
				
				
					
			</div>
			
		)
	}
}