import React from 'react'


export default class UpdateProduct extends React.Component {
	
	constructor(){
		super()
		this.state = {
			clicked: false,
			name: '',
			price: '',
			category: '',
			stock: ''
			
			
		}
	}
	 
	
	
	
	clicked(){
		
		var clicked = this.state.clicked
		this.setState({clicked: !clicked})
	}
		
	
	getInfo(){
		var name = this.refs.name.value
		var price = this.refs.price.value 
		var category = this.refs.category.value
		var stock = this.refs.stock.value
		
		
		this.setState({name: name})
		this.setState({price: price})
		this.setState({category: category})
		this.setState({stock: stock})
		
	}
	
	
	
			 UpdateInfo(e){
				 debugger;
				 
				 var name = this.state.name
				 var price = this.state.price
				 var category = this.state.category
				 var stock = this.state.stock
				 
				 if(this.state.name == ''){
					 name = this.props.name
				 } if(this.state.price == ''){
					 price = this.props.price
				 } if(this.state.category == ''){
					category = this.props.category
				 } if(this.state.stock == ''){
					 stock = this.props.stock
				 }
				 
				 
				 var id = this.props.id
				 var clicked = this.state.clicked
				 
				 
				 this.props.updateInfo(id, name, price, category, stock)
				 
				 
				 this.setState({clicked: !clicked})
				 
		}
	
	
	removeInfo(){
		var id = this.props.id
		
		this.props.handleRemove(id)
	}
	
     
	
	render(){
		
		
		
		
		const bold = {
			fontWeight: "bold",
			marginTop: "10px"
		}
		
		const block = {
			display: "block",
			marginBottom: "15px",
			margin: "0 auto"
		}
		
		
		return( 
			<div className="container-fluid">
				
			           <div>
						    <img src={this.props.url} height="200" width="200"/>
					 		<h2>{this.props.name}</h2>
							{this.state.clicked == true ? <input ref="name" placeholder="name" onChange={this.getInfo.bind(this)}/> : null}
					 		<p style={bold}>Price: {this.props.price}</p>
							{this.state.clicked == true ? <input ref="price" placeholder="price" onChange={this.getInfo.bind(this)}/> : null}
							<p style={bold}>Category: {this.props.category}</p>
							{this.state.clicked == true ? <input ref="category" placeholder="category" onChange={this.getInfo.bind(this)}/> : null}
							<p style={bold}>Stock: {this.props.stock}</p>
							 {this.state.clicked == true ? <input ref="stock" placeholder="stock" onChange={this.getInfo.bind(this)} style={block}/> : null}
						   	 <p style={bold}>Sold: {this.props.sold}</p>
							
							 {this.state.clicked == false ? <button onClick={this.clicked.bind(this)} className="btn btn-success">Edit</button> : <button className="btn btn-success" onClick={this.UpdateInfo.bind(this)}>Update</button> }
							 
							<button className="btn btn-danger" onClick={this.removeInfo.bind(this)}>Delete</button>
						</div>
				
				
				
		  </div>
			
		)
	}
}