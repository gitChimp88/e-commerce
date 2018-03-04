import React from 'react'





export default class Tick2 extends React.Component {
	
    constructor(){
		super()
		this.state = {
			current: 0
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
		   this.props.changeClicked()
		}

		timer() {
			
		var count = this.state.current;
		  if(count > 0) {
			 this.setState({ current: this.state.current -1 }); 
		  }	else {
			 this.stop()
		  }
			
		}
	
	
	
	render(){
		
		
		
		const green = {
			color: "green",
			fontWeight: "bold",
			fontSize: "25px"
			
		}
		
		const centers = {
			textAlign: "center",
			marginTop: "5px"
		}
		
		
		
		
		return ( 
			   <div style={centers}>
					<p style={green}>Signed In! </p>
				 <img height="50" width="50" src="/images/checked.png"></img>
			     </div>
			)
	}
}