import React from 'react'
import Drop from './Drop'

export default class Navbar extends React.Component{
	
	constructor(){
		super()
			this.state = {
				
			
			}
		
	}
	

	
	handleClick(e){
	   debugger;
		var name = e.target.textContent
		
		
		if(name == "Home") {
			name = ""
		} 
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			
				state:{admin: this.state.admin}
									})
	    }
	
	
	
	render(){
		
		const style = {
			listStyle: "none",
			display: "inline-block",
			margin: "20px",
			fontSize: "20px",
		    cursor: "pointer"
			
		}
		
		const centers = {
			textAlign: "center",
			marginTop: "20px"
			
		}
		
		return( 
			<div style={centers}>
				<ul>
					<li className="change" style={style} onClick={this.handleClick.bind(this)}>Home</li>
					<li className="change"  style={style} onClick={this.handleClick.bind(this)}>Shop</li>
					<li className="change"  style={style} onClick={this.handleClick.bind(this)}>About</li>
					<li className="change"  style={style} onClick={this.handleClick.bind(this)}>Cart</li>
					<Drop  
						style={style} 
						click = {this.handleClick.bind(this)}
						history = {this.props.history}
						/>
				</ul>
			</div>
			
		)
	}
}