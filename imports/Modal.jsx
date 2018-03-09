import React from 'react'





export default class Modal extends React.Component {
	

	
	
	 goBack(){
		 this.props.togg()
	 }
	
	
	 render(){
		 
		 /*onclick display modal*/
		 
			  const backdropStyle = {
				  position: 'fixed',
				  top: 0,
				  bottom: 0,
				  left: 0,
				  right: 0,
				  backgroundColor: 'rgba(0,0,0,0.3)',
				  padding: 50
				};

				
				const modalStyle = {
				  backgroundColor: 'white',
				  borderRadius: 5,
				  maxWidth: 500,
				  minHeight: 200,
				  margin: '0 auto',
				  padding: 30,
				  color: "#0A4B6B"
				};
		
		 const under = {
			 textDecoration: "underline",
			 marginTop: "10px",
			 marginBottom: "0"
		 }
		
		      return ( 

					<div>
						 <div  style={backdropStyle}>
							  <div  style={modalStyle}>
								    <h1>{this.props.name}</h1>
								    <img height="200" width="200" src={this.props.url} alt="cnnl"></img>
								    <p>Price: {this.props.price}</p>
								    <p style={under}>Description</p>
								    <p>{this.props.description}</p>
								    <button className="btn btn-primary" onClick={this.goBack.bind(this)}>Go Back</button>
									 
							  </div>
						   </div>
						
					 </div>
					 
				)

		 }
	 
}


