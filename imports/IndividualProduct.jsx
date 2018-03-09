import React from 'react'
import Slide from './Slide'



export default class IndividualProduct extends React.Component {
	
	constructor(){
		super()
		this.state = {
		    
			
		}
	}
	 
	
	
	
	render(){
		
		const marg = {
			marginTop: "65px",
			marginBottom: "65px"
		}
		return( 
			<div>
				
			            <div style={marg}>
						   
							<Slide
								id={this.props.id}
								url={this.props.url}
								name={this.props.name}
								price={this.props.price}
								category={this.props.category}
								stock={this.props.stock}
								sold={this.props.sold}
								favourite={this.props.favourite}
								description={this.props.description}
								/>
						</div>
				
				
				
		  </div>
			
		)
	}
}