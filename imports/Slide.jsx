import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'
import {ShoppingCart} from './api/ShoppingCart'
import Tick from './Tick'



const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce']

const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class Slide extends React.Component {
	constructor(){
		super()
		this.state = {
			animation: transitions[4], duration: 1000, visible: true 
		
		}
		
	}
	
	
   changeClicked(){
		this.setState({clicked: false})
	}
	
	
	AddToCart(){
		debugger;
		var productId = this.props.id
		var name = this.props.name
		var price = this.props.price
		var url = this.props.url
		var stock = this.props.stock
	    var sold = this.props.sold
		var quantity = 1
		this.setState({clicked: true})
		this.setState({ visible: !this.state.visible })
		
		ShoppingCart.insert({productId, name, price, url, stock, quantity, sold},(err,done)=>{
                        console.log(err + " id = " + done)
                })
		
	}
	
	
	
	
  render() {
    
	const { animation, duration, visible } = this.state

	const style = {
		margin: "0",
		cursor: "pointer"
	}
	
	
	const bold = {
		fontWeight: "bold"
	}
	
	const inline = {
		display: "inline-block"
	}
	
	const marg = {
		marginTop: "10px"
	}
	
    return (
      
    
         <div>
			
			 
                 <h2>{this.props.name}</h2>
			
			
			  <Transition animation={animation} duration={duration} visible={visible}>
				<img style={style} height="200" width="200" src={this.props.url} onClick={this.AddToCart.bind(this)}></img>
			  </Transition>
			<div style={marg} ><p style={inline}>Click to add to</p><img style={inline} src="/images/smallTrolley.png" height="20" width="20"/><p style={bold}>£{this.props.price}</p></div>
		     
			
			{this.state.clicked == true ? <Tick
												 changeClicked = {this.changeClicked.bind(this)}
												 /> : null}
			 
			
		</div>
          
		
      
    )
  }
}

