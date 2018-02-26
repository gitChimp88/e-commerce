import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'



export default class Drop extends React.Component {
	
	
	handle(e){
	   
		var name = e.target.textContent
		
		this.props.click(e)
			
	    }
	
	
	
	
	render(){
		
		const style = {
			fontSize: "20px",
	
			margin: "20px"
		}
		
		return(
			 <Dropdown style={style} text='Accounts' pointing className='link item change'>
      <Dropdown.Menu>
        
       
        <Dropdown.Item onClick={this.handle.bind(this)}>My Account</Dropdown.Item>
        <Dropdown.Item onClick={this.handle.bind(this)}>Sign In</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

		)
	}
}
  






