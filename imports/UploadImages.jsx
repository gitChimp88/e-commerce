import React from 'react'

export default class UploadImages extends React.Component{
	
		constructor(){
			super()
			this.state = {
				url: ''
			}
		}
	
	
	
	
	
        uploadWidget() {
        cloudinary.openUploadWidget({ 
                cloud_name: 'dsj3kwygd', 
                upload_preset: 'ldcvgsnv', 
                //tags:[your_tag]//
        },
									
            function(error, result) {
                if(error){
                  //handle error
                }else{
                //add the picture to your database in its own collection
					
					var url = result[0].secure_url
					this.setState({url: url})
					this.props.setUrl(this.state.url)
                }
            }.bind(this));
			
		//try putting setUrl here?	
    }

        render(){
			
			
                return (
                        <div className="main">
							<div className="upload">
								<hr/>
								<button className ="ui button"
										onClick={this.uploadWidget.bind(this)}>
									add Product image
								</button>
								
							<hr/>
    						</div>
                       </div>
                )
        }
}