import React from 'react'
import {Products} from './api/pics'
import {ShoppingCart} from './api/ShoppingCart'
import CartProduct from './CartProduct'

import Navbar from './Navbar'

export default class Cart extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					cart: [],
					productId: [],
					subtotal: []
				}
		
	}
	
	
	handle(e){
	 
		var name = e.target.textContent
		
		
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			 })
	    }
	
	checkout(e){
		var subtotal = this.state.subtotal
		
		var name = e.target.textContent
		
		var url = `/${name}`
		if(this.state.subtotal > 0){
			this.props.history.push({
			pathname: url,
			
			state:{subtotal: this.state.subtotal}
									
		})
		}
		
	}
	
	
	
	componentWillMount(){
        
		Tracker.autorun(()=>{
			var cart = ShoppingCart.find({}).fetch()
			this.setState({cart: cart})
			
		})
		
	}
	
	minusSubTotal(amount){
		var subtotal = this.state.subtotal
		
		var newSub = parseInt(subtotal) - parseInt(amount)
		this.setState({subtotal: newSub})
	}
	
	addSubTotal(amount){
		var subtotal = this.state.subtotal
		
		var newSub = parseInt(subtotal) + parseInt(amount)
		this.setState({subtotal: newSub})
	}
	
	componentDidMount(){
		
		const cart = this.state.cart
		cart.map((item)=>{
			var total = this.state.subtotal
			total.push(parseInt(item.price * item.quantity))
			this.setState({subtotal: total})
		})
		
		var sum = this.state.subtotal.reduce((a, b) => a + b, 0);
		var total = parseInt(sum)
		this.setState({subtotal: total})
	}
	
	
	
	
     
	
	render(){
		
		const centers = {
			textAlign: "center",
			marginTop: "30px"
			
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
			display: "inline-block",
			margin: "30px"
		}
		
		const subtotal = {
			textAlign: "center",
			fontWeight: "bold",
			fontSize: "30px",
			
		}
		
		const cents = {
			textAlign: "center"
		}
		
		
		
		return( 
			
			<div>
				<Navbar
					history={this.props.history}
					/>
				
				<div style={centers}>
							<img src="/images/cart.png"/>
					     <h1 style={header}>Cart</h1>
				</div>
				
				<div style={cents}>
				{this.state.cart.map((ele, i)=>{
					
					
					console.log(this.state.cart)
					
					
							 return (
								  <div key={i} style={centered}>
									<CartProduct
									url={ele.url}
									name={ele.name}
									price={ele.price}
									productId={ele.productId}
									ident={ele._id}
								    quantity={ele.quantity}
									stock = {ele.stock}
								    sold = {ele.sold}
									minusSubTotal = {this.minusSubTotal.bind(this)}
								    addSubTotal = {this.addSubTotal.bind(this)}
									/>
					               </div>   
						 
							 )	 
						
					})}
					</div>
				
				<h4 style={subtotal}>SubTotal: £{this.state.subtotal} </h4>
				
				
				<div style={center}>
					<button className="btn btn-success" style={but} onClick={this.checkout.bind(this)}>Checkout</button>
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Shop</button>
				</div>
				
			  
			    
				
				
				
				
					
			</div>
			
		)
	}
}