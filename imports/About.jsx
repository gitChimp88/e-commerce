import React from 'react'
import Navbar from './Navbar'

export default class About extends React.Component{
	
	
	
	 clicker(e){
	   debugger;
		var name = e.target.textContent
		
		if(name == "Home") {
			name = ""
		} 
			var url = `/${name}`
			
		    this.props.history.push({
				pathname: url,
			})
	    }
	
	render(){
		
		const header = {
			fontSize: "42px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway"
		}
		
		const secondheader = {
			fontSize: "30px",
		    textAlign: "center",
			marginBottom: "30px",
			marginTop: "30px",
		    fontFamily: "Raleway",
			textDecoration: "underline"
		}
		
		const para = {
			fontFamily: "Raleway",
			fontSize: "18px"
		}
		
		const style = {
			listStyle: "none",
			textAlign: "center",
			padding: "0"
		}
		
		const centers = {
			textAlign: "center",
			fontSize: "20px",
			fontFamily: "Exo 2"
			
		}
		
		const top = {
			marginTop: "50px",
			marginBottom: "30px"
		}
		
	    const cursor = {
			cursor: "pointer",
			marginBottom: "10px"
		}
		
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1 style={header}>Logo Fine Jewelry</h1>
				<h2 style={secondheader}>About</h2>
				
				<div><img className="img-responsive front" src="/images/model.jpg" /></div>
				<div className="container-fluid">
					<h2 style={secondheader}>Our Philosophy</h2>
				<p style={para}>
					Lorem ipsum dolor amet tilde kogi authentic, cred 3 wolf moon fingerstache hexagon migas letterpress. Freegan try-hard dreamcatcher, disrupt fingerstache hashtag street art mixtape polaroid iPhone taiyaki skateboard stumptown etsy. Vegan truffaut bespoke taiyaki typewriter tumblr chicharrones etsy 90's activated charcoal kinfolk twee 8-bit drinking vinegar stumptown. Try-hard vape cray single-origin coffee tousled pok pok DIY. Tbh farm-to-table bushwick 3 wolf moon gentrify twee post-ironic.
                </p>
				
				<p style={para}>
					Truffaut literally keffiyeh, kombucha chillwave before they sold out subway tile cred typewriter cronut etsy live-edge XOXO iPhone ennui. Tumblr typewriter yr semiotics, tacos hell of humblebrag master cleanse church-key succulents bushwick post-ironic unicorn retro. Ethical letterpress put a bird on it locavore mixtape. Offal leggings narwhal, bushwick hashtag sartorial four loko taxidermy copper mug lo-fi meh fashion axe cred. Shabby chic occupy vaporware echo park food truck portland skateboard keytar flexitarian banjo migas scenester cardigan yr.
                </p>
					
					<p style={para}>
						Kombucha you probably haven't heard of them art party pabst kickstarter af hella literally cronut chicharrones air plant brooklyn. Quinoa swag aesthetic 8-bit normcore, shoreditch letterpress DIY. Single-origin coffee fixie palo santo prism jianbing church-key, readymade marfa venmo williamsburg swag. Shoreditch jean shorts literally migas. Cray fixie plaid aesthetic trust fund. Waistcoat cold-pressed 8-bit brunch single-origin coffee tacos hella typewriter vinyl prism butcher.
					</p>
				</div>
				<br/>
				
				<hr/>
				
				<div className="row" style={top}>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Navigate</h4>
						<ul style={style}>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Shop</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>About</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Cart</li>
							<li onClick={this.clicker.bind(this)} className="change" style={cursor}>Sign In</li>
						</ul>
					</div>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Elsewhere</h4>
						<p className="text-center change" style={cursor}>Facebook</p>
						<p className="text-center change" style={cursor} >Instagram</p>
					</div>
					<div className="col-md-4 col-sm-4">
						<h4 style={centers}>Fine Print</h4>
						<p className="text-center">Legal imprint</p>
						<p className="text-center">All rights reserved</p>
						<p className="text-center"> © 2018 Logo Fine Jewelry</p>
					</div>
				</div>
				
				
			</div>
			
		)
	}
}