import React from 'react'
import {Different} from './api/pics'



export default class Admin extends React.Component {
	
	      constructor(){
                super()
                this.state = {
					url: '',
					name: '',
					price: '',
					category: '',
					pictures: []
				}
		
	}
	
	addPics(){
		
		var url = this.state.url
		var name = this.state.name
		var price = this.state.price
		var category = this.state.category
		
		if(url && name && price && category){
            //first we check that we have a todo to submit/insert
		
               Meteor.call('addPic', url, name, price, category, ()=>{
               // here we call the method 'addTodo' passing our todo and a callback
				    this.refs.url.value = ""
                    this.refs.name.value = ""
				    this.refs.price.value = ""
				    this.refs.category.value = ""
				    this.setState({url:''})
                    this.setState({name:''})
				    this.setState({price:''})
				    this.setState({category:''})
				   
				 
              // then inside the callback we clear our input and our state.
               })
            }
		}
	
	
	
	
		
		 
	
	
	componentWillMount(){
        
		Tracker.autorun(()=>{
			var pictures = Different.find({}).fetch()
			this.setState({pictures: pictures})
		})
	
	}
	
	
			 getInfo(e){
				 
				 
				 var url = this.refs.url.value
				 var name = this.refs.name.value
				 var price = this.refs.price.value
				 var category = this.refs.category.value
				 
					this.setState({url:url})
				    this.setState({name:name})
				    this.setState({price:price})
				    this.setState({category:category})
				 
					}
	
	
     
	
	render(){
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
			   <h1>Admin area</h1>
			    
						
						<input ref="url" onChange={this.getInfo.bind(this)} placeholder="url"/>
						<input ref="name" onChange={this.getInfo.bind(this)} placeholder="name"/>
						<input ref="price" onChange={this.getInfo.bind(this)} placeholder="price"/>
						<input ref="category" onChange={this.getInfo.bind(this)} placeholder="category"/>
						
						<button onClick={this.addPics.bind(this)}>Submit</button>
					
				{this.state.pictures.map((ele, i)=>{
					 return (
						 <div>
						    <img src={ele.url} height="100" width="100"/>
					 		<h2>{ele.name}</h2>
					 		<h3>{ele.price}</h3>
							<h3>{ele.category}</h3>
						</div>
							 )
				})}
				
				
					
			</div>
			
		)
	}
}