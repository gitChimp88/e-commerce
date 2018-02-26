import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import "./Commerce.css"



export default class Drop extends React.Component {
	
	
	
	
	
	
	render(){
		
		const style = {
		    margin: "20px",
			fontSize: "20px",
		    cursor: "pointer"
		}
		
		return(
			 <Dropdown style={style} text='Sort' pointing className='link item change'>
      <Dropdown.Menu>
        
       
        <Dropdown.Item>Price high-low</Dropdown.Item>
		<Dropdown.Item>Price low-high</Dropdown.Item>
		
        
       
        
      </Dropdown.Menu>
    </Dropdown>

		)
	}
}
  






