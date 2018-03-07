import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'
import {ShoppingCart} from './api/ShoppingCart'
import Tick from './Tick'



const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce']

const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class IndividualFavour extends React.Component {
	constructor(){
		super()
		this.state = {
			animation: transitions[4], duration: 1000, visible: true,
		    color: false
		}
		
	}
	
	
   changeClicked(){
		this.setState({clicked: false})
	}
	
	remove(){
		var id = this.props.id
		
		 Meteor.call('removeFavourite',id)
	}
	
	
	AddToCart(){
		debugger;
		var productId = this.props.ident 
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
		cursor: "pointer",
		display: "block"
	}
	
	
	const bold = {
		fontWeight: "bold"
	}
	
	const inline = {
		display: "inline-block"
	}
	
	const marg = {
		cursor: "pointer",
		margin: "10px"
	}
	
	const nomarg = {
		margin: "0"
	}
	
	
    return (
      
    
         <div>
			
			  <img style={marg} src="/images/colorStar.png" height="50" width="50"/>
                 <h2 style={nomarg}>{this.props.name}</h2>
			
			     
			  <Transition animation={animation} duration={duration} visible={visible}>
				<img style={style} height="190" width="200" src={this.props.url} onClick={this.AddToCart.bind(this)}></img>
			  </Transition>
			<div style={marg} onClick={this.AddToCart.bind(this)} ><p style={inline}>Click to add to</p><img style={inline} src="/images/smallTrolley.png" height="20" width="20"/><p style={bold}>£{this.props.price}</p>
			
			</div>
			
			
		     <img style={marg} src="/images/delete.png" height="20" width="20" onClick={this.remove.bind(this)}/>
			
			{this.state.clicked == true ? <Tick
												 changeClicked = {this.changeClicked.bind(this)}
												 /> : null}
			 
			
		</div>
          
		
      
    )
  }
}

