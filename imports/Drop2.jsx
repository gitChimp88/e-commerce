import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import "./Commerce.css"
import {Products} from './api/pics'



export default class Drop extends React.Component {
	
	
	
	reorderHigh(){
				const cart = this.props.pictures

				var sorted = cart.sort(function(a, b){
					var A = parseInt(a.price)
					var B = parseInt(b.price)
		  return B - A;
		});
		console.log(sorted);
		
		this.props.setOrder(sorted)
		
	}
	
	reorderLow(){
		const cart = this.props.pictures
		
		var sorted = cart.sort(function(a, b){
					var A = parseInt(a.price)
					var B = parseInt(b.price)
		  return A - B;
		});
		console.log(sorted);
		
		this.props.setOrder(sorted)
	}
	
	
	
	render(){
		
		const style = {
		    margin: "20px",
			fontSize: "20px",
		    cursor: "pointer"
		}
		
		return(
			 <Dropdown style={style} text='Sort' pointing className='link item change'>
      <Dropdown.Menu>
        
       
        <Dropdown.Item onClick={this.reorderHigh.bind(this)}>Price high-low</Dropdown.Item>
		<Dropdown.Item onClick={this.reorderLow.bind(this)}>Price low-high</Dropdown.Item>
		
        
       
        
      </Dropdown.Menu>
    </Dropdown>

		)
	}
}
  






