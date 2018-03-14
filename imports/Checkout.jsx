import React from 'react'
import {Products} from './api/pics'
import {ShoppingCart} from './api/ShoppingCart'
import {Orders} from './api/orders'
import StripeCheckout from 'react-stripe-checkout';
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
					signedIn: false,
					customerName: '',
					customerEmail: '',
					customerAddress: '',
					name: '',
					email: '',
					address: '',
				}
			  
		this.checkOut = this.checkOut.bind(this)
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
			
			
			var user = Meteor.user()
		    if(user){
			this.setState({signedIn: true})
			var user = Meteor.user()
			const customerName = user.profile.name
		    const customerAddress = user.profile.address
			const customerEmail = user.emails[0].address
			
			this.setState({customerName, customerAddress, customerEmail})
			
		}
			
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
	
	
    onToken(token, amount){
		
		amount = this.props.location.state.subtotal;
      Meteor.call(
          'StripeChargeMethod',
          token, 
          amount,
		
          (err,data)=>{ 
             if(err){
             //as always place a debugger here so that you can see what the error is
            
			   console.log('error')
             }else if(data){
             //debugger to check the data
			
                if(data.status == "succeeded"){
                  console.log('success, update stock')
				 this.checkOut()
            }else if(data.type =='StripeInvalidRequestError'){
			
                  console.log('invalid request')
             }
            }
          }
      )

  }
	
	shippingDetails(){
		var name = this.refs.name.value
		var email = this.refs.email.value
		var address = this.refs.address.value
		
		this.setState({name: name})
		this.setState({email: email})
		this.setState({address: address})
	}
	
	
	
	checkOut(){
		//this updates stock and clears the cart, should be activated after payment
		
		console.log("called from successful payment, update stock")
		
		
		const cart = this.state.cart
		cart.map((item)=>{
			var updateStock = item.stock - item.quantity;
			var productId = item.productId;
			var ident = item._id;
			var sold = item.sold + item.quantity;
			
			
			var url = item.url
			var product = item.name
			var price = item.price
			var quantity = item.quantity
			var address = ''
			var email = ''
			var name = ''
			if(Meteor.userId()){
				 name = this.state.customerName
				 address =  this.state.customerAddress
			     email = this.state.customerEmail
			} else {
				name = this.state.name
				address = this.state.address
				email = this.state.email 	
			}
			
			
			
			
			Meteor.call('updateStock', productId, updateStock, sold, (err,done)=>{
                        console.log(err,done)
                })
			
			Meteor.call('addOrder', url, name, price, quantity, address, email, product, (err,done)=>{
                        console.log(err,done)
                })
			
		    ShoppingCart.remove({_id:ident})
			
			
			
		})
		       var url = "/Confirmation"
		
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
			textAlign: "center",
			fontWeight: "bold"
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
		
		const details = {
			textAlign: "center",
		    margin: "30px",
			backgroundColor: "azure",
			border: "1px solid black",
			borderRadius: "10px",
			width: "50%",
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
					{this.state.signedIn == false ? <input ref="name" onChange={this.shippingDetails.bind(this)} style={boxes}/> : <h1 style={details}>{this.state.customerName}</h1>}
					<p style={center}>Email:</p>
					{this.state.signedIn == false ? <input ref="email" onChange={this.shippingDetails.bind(this)} style={boxes}/> : <h2 style={details}>{this.state.customerEmail}</h2>}
					<p style={center}>Address:</p>
					{this.state.signedIn == false ? <textarea ref="address" onChange={this.shippingDetails.bind(this)} rows="4" cols="50" style={boxes}></textarea> : <h2 style={details}>{this.state.customerAddress}</h2>}
					<p style={center}>Telephone:</p>
					{this.state.signedIn == false ? <input style={boxes}/> : <input style={boxes}/>}
				
				</div>
				
				<div style={center}>
					<StripeCheckout style={but}
						
						token={this.onToken.bind(this)}
						stripeKey   =  "pk_test_xfdBYsU6VCE6VybteJ1kICA5"
						amount      =  {this.props.location.state.subtotal * 100}
						email       =  {this.state.customerEmail}
						currency    = "GBP"
						/>
					
				    <button className="btn btn-success" style={but} onClick={this.handle.bind(this)}>Back</button>
					
				</div>
				
			 </div>
			
		)
	
  }
}