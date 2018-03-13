import React from 'react'
import "./Commerce.css"

export default class Confirmation extends React.Component {
	
    constructor(){
		super()
		this.state = {
			current: 3,
		
		}
		this.timer = this.timer.bind(this)
		this.stop = this.stop.bind(this)
		
		
	}
	
	
	     componentDidMount() {
				
		   var intervalId = setInterval(this.timer, 1500);
		   // store intervalId in the state so it can be accessed later:
		   this.setState({intervalId: intervalId});
		}

	
	
		stop(){
			
			clearInterval(this.state.intervalId);
		    
			if(Meteor.userId()){
				this.props.history.push({
				pathname: "/Orders",
			 })
		 } else {
			 this.props.history.push({
				pathname: "/",
			 })
		 }
			
	  }

		timer() {
			
		var count = this.state.current;
		  if(count > 0) {
			 this.setState({ current: this.state.current -1 }); 
		  }	 else{
			   this.stop()
		   }
			
		}
	
	
	
	render(){
		
		
		
		const green = {
			color: "green",
			fontWeight: "bold",
			fontSize: "25px",
			textAlign: "center"
			
		}
		
		const centers = {
			textAlign: "center",
			marginTop: "5px"
		}
		
		
		
		
		return ( 
			<div>
				{this.state.current >= 1  ? <div style={centers}>
					<div className="bar"></div>
				    <div>Loading</div>
				 </div> : <p style={green}>Payment Confirmed!</p>}
			</div>
			
			
			     
			)
	}
}