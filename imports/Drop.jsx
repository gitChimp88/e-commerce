import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'



export default class Drop extends React.Component {
	constructor(){
		super()
			this.state = {
				admin: false
			
		}
	}
	
	
	componentWillMount(){
        
		Tracker.autorun(()=>{
			
			
			
			if(Roles.userIsInRole(Meteor.userId(), ['admin'], undefined)){
				this.setState({admin: true})
			}
			
		})
		
	}
	
	
	
	handle(e){
	   
		var name = e.target.textContent
		if(name == "Admin"){
			if(Roles.userIsInRole(Meteor.userId(), ['admin'], undefined)){
			    this.props.click(e)
			}
		} else {
			this.props.click(e)
		}
		
			
	    }
	
	handleClick(){
		
			Meteor.logout()
		  var url = "/"
		  this.props.history.push({
				pathname: url,
			})
	        console.log("logged out")
		
		
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
        <Dropdown.Item onClick={this.handleClick.bind(this)}>Sign out</Dropdown.Item>
		<Dropdown.Divider />
	    {this.state.admin == true ? <Dropdown.Item onClick={this.handle.bind(this)}>Admin</Dropdown.Item> : null}
        
      </Dropdown.Menu>
    </Dropdown>

		)
	}
}
  






