import React from 'react'
import Drop from './Drop'

export default class Navbar extends React.Component{
	
	constructor(){
		super()
			this.state = {
				works: "Receiving props from Navbar!"
			}
		
	}
	

	
	handleClick(e){
	 
		var name = e.target.textContent
		
		if(name == "Home") {
			name = ""
		} 
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			
				state:{works: this.state.works}
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
					<Drop  style={style} click = {this.handleClick.bind(this)}/>
				</ul>
			</div>
			
		)
	}
}