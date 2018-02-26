import React from 'react'
import Navbar from './Navbar'
import "./Commerce.css"

export default class SignIn extends React.Component{
	
	constructor(){
		super()
		this.state = {
			
		}
	}
	
	
	render(){
		
		const head = {
			fontSize: "30px",
			border: "2px solid black",
			textAlign: "center",
			fontFamily: "Exo 2",
			backgroundColor: "azure"
		}
		
		const inline = {
			display: "inline-block",
			margin: "10px",
			fontFamily: "Exo 2"
		}
		
		const boxes = {
			    height: "35px",
              	width: "250px",
    			borderRadius: "5px",
				backgroundColor: "azure"
		  }
		
		const marg = {
			marginBottom: "10px",
			marginTop: "10px",
			fontSize: "20px",
			fontFamily: "Exo 2"
		}
		const but = {
			width: "100px"
		}
		
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1 style={head}>Sign In</h1>
				<br/>
				<div className="text-center" style={marg}>
					<h4 style={inline}>Username</h4>
				     <input style={boxes}/>
				</div>
				
				<div className="text-center">
					<h4 style={inline}>Password</h4>
				    <input style={boxes}/>
				</div>
				
				<div className="text-center" style={marg}>
					<button className="btn btn-success" style={but}>Sign In</button>
				</div>
				
				
				<hr/>
				
				<h2 style={head}>Not Registered? Sign up Below ↓↓↓</h2>
				
			        <div className="text-center">
						<h4 style={marg} >Name</h4>
				        <input style={boxes}/>
				    </div>
				
				    <div className="text-center">
					  <h4 style={marg} >Username</h4>
				      <input style={boxes}/>
				    </div>
				
				    <div className="text-center">
						 <h4 style={marg} >Email</h4>
				    <input style={boxes}/>
				    </div>
				
				    <div className="text-center">
						<h4 style={marg} >Password</h4>
				    <input style={boxes}/>
				    </div>
				
				    <div className="text-center">
					   <h4 style={marg} >Repeat Password</h4>
				      <input style={boxes}/>
				    </div>
				
				
				<div className="text-center" style={marg}>
					<button className="btn btn-success" style={but}>Submit!</button>
				</div>
				
				
				
			</div>
				
				
				
			)
	}
}