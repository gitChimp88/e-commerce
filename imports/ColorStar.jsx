import React from 'react'





export default class ColorStar extends React.Component {
	
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
		   this.props.setColor()
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
		
		
		
		const yellow = {
			color: "gold",
			fontWeight: "bold",
			fontSize: "18px"
			
		}
		
		const centers = {
			textAlign: "center",
			marginTop: "5px"
		}
		
		
		
		
		return ( 
			   <div style={centers}>
					<p style={yellow}>Added to Favourites!</p>
				 <img height="25" width="25" src="/images/colorStar.png"></img>
			     </div>
			)
	}
}