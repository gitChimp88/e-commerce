import React from 'react'
import {Products} from './api/pics'
import UploadImages from './UploadImages'
import UpdateProduct from './UpdateProduct'
import Navbar from './Navbar'



export default class Admin extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					stock: '',
					pictures: [],
					clicked: false,
					id: ''
				}
			  
			  this.setUrl = this.setUrl.bind(this)
		
	}
	
	addPics(){
		
		var url = this.state.url
		var name = this.state.name
		var price = this.state.price
		var category = this.state.category
		var stock = this.state.stock
		var sold = 0
		
		if(url && name && price && category && stock){
            //first we check that we have a todo to submit/insert
		
               Meteor.call('addPic', url, name, price, category, stock, sold, ()=>{
               
				    this.refs.name.value = ""
				    this.refs.price.value = ""
				    this.refs.category.value = ""
				   	this.refs.stock.value = ""
				    this.setState({url:''})
                    this.setState({name:''})
				    this.setState({price:''})
				    this.setState({category:''})
				    this.setState({stock:''})
				//  inside the callback we clear our input and our state.
               })
            }
		}
	
	
	
	clicked(){
		var clicked = this.state.clicked
		this.setState({clicked: !clicked})
	}
		
		 
	
	
	componentWillMount(){
        
		Tracker.autorun(()=>{
			var pictures = Products.find({}).fetch()
			this.setState({pictures: pictures})
		})
	
	}
	
	
	
	
		setUrl(url){
			debugger;
			this.setState({url: url})
		}
	
			 getInfo(e){
				 
				 
				
				 var name = this.refs.name.value
				 var price = this.refs.price.value
				 var category = this.refs.category.value
				 var stock = this.refs.stock.value
				 
					
				    this.setState({name:name})
				    this.setState({price:price})
				    this.setState({category:category})
				 	this.setState({stock:stock})
				 
			}
	
	updateInfo(id, name, price, category, stock){
		
		Meteor.call('updatePic', id, name, price, category, stock, (err,done)=>{
                        console.log(err,done)
                })
	}
	
	handleRemove(id){
		
		
        Meteor.call('removePic',id)
                //call the meteor method 'removePic' 
                //passing the id to remove as an argument
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
			marginTop: "15px"
		}
		
		const centers = {
			textAlign: "center",
			display: "inline-block",
			margin: "20px"
		}
		
		
		
		
		
		
		
		return( 
			<div className="container-fluid">
				
				<Navbar
					history={this.props.history}
					/>
				
			   <h1 style={head}>Admin area</h1>
			    
				{this.state.url ? <img src={this.state.url} height="200" width="200"/> : <UploadImages
					setUrl = {this.setUrl}
					/>}
				
				
					
					<div>
						<h4 style={inline}>Product Name</h4>
				        <input ref="name" onChange={this.getInfo.bind(this)} placeholder="name" style={boxes}/>
				    </div>
				
				    <div>
						<h4 style={inline}>Price</h4>
					    <input ref="price" onChange={this.getInfo.bind(this)} placeholder="price" style={boxes}/>
				    </div>
				
				    <div>
						<h4 style={inline}>Category</h4>
					    <input ref="category" onChange={this.getInfo.bind(this)} placeholder="category" style={boxes}/>
				    </div>
					
					 <div>
						<h4 style={inline}>Stock</h4>
					    <input ref="stock" onChange={this.getInfo.bind(this)} placeholder="stock" style={boxes}/>
				    </div>
					
				    
				    
						
						<button onClick={this.addPics.bind(this)} className="btn btn-success" style={marg}>Upload Product</button>
				<br/>
				<hr/>
				
				<h1 style={head}>Current Products</h1>
				
			
				
				{this.state.pictures.map((ele, i)=>{
					 return (
						 <div key={i} style={centers}>
							  <UpdateProduct
							 url = {ele.url}
							 name = {ele.name}
							 price = {ele.price}
							 category = {ele.category}
							 stock = {ele.stock}
							 id = {ele._id}
							 updateInfo = {this.updateInfo.bind(this)}
						     handleRemove = {this.handleRemove.bind(this)}
							 sold = {ele.sold}
							 />
						 </div>
						
						
							 )
				})}
				
				
				
				
					
			</div>
			
		)
	}
}