import React from 'react'
import {Products} from './api/pics'
import {ShoppingCart} from './api/ShoppingCart'



export default class CartProduct extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					cart: [],
					productId: []
					
				}
		
	}
	
	handleRemove(){
		
		var ident = this.props.ident
		ShoppingCart.remove({_id:ident})
		
		
		var amount = this.props.price
		if(this.props.quantity > 1){
			amount = this.props.price * this.props.quantity
		}
		
		this.props.minusSubTotal(amount)
	}
	
	addQuantity(){
		debugger;
		var ident = this.props.ident
		if(this.props.quantity < this.props.stock){
			ShoppingCart.update({_id:ident},{ $inc:{ quantity: + 1 }
			  })
			var amount = this.props.price
		this.props.addSubTotal(amount)
		}
		
		
		
	}
	
	minusQuantity(){
		
		var ident = this.props.ident
		if(this.props.quantity > 1){
			ShoppingCart.update({_id:ident},{ $inc:{ quantity: - 1 }
			  })
			var amount = this.props.price
		    this.props.minusSubTotal(amount)
		}
		
	}
	
	
	
	render(){
		
		const inline = {
			margin: "20px",
			display: "inline-block"
		}
		
		const block = {
			display: "block",
			margin: "0 auto",
			cursor: "pointer"
		}
		
		const cursor = {
			cursor: "pointer"
		}
		
		const raleway = {
			fontFamily: "Raleway",
			fontWeight: "bold"
		}
		
		
		return( 
			
			    <div>
					 
						
						   <img src={this.props.url} height="200" width="200"/>
						     <h4 style={raleway}>{this.props.name}</h4>
						   
				{this.props.quantity > 1 ? <h5>£{this.props.price * this.props.quantity}</h5> : <h5>£{this.props.price}</h5>}
								<img style={cursor} src="/images/minus.png" onClick={this.minusQuantity.bind(this)}/>
							  <h5 style={inline}>Quantity: {this.props.quantity}</h5>	
								<img style={cursor} src="/images/plus.png" onClick={this.addQuantity.bind(this)}/>
				
							   
								<img style={block} src="/images/delete.png" height="50" width="50" onClick={this.handleRemove.bind(this)}/>
					            
				              
							 	 
				
				</div>
			
		)
	}
}