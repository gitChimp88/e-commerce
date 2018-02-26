import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import Shop from './Shop'
import About from './About'
import Cart from './Cart'
import Account from './Account'
import SignIn from './SignIn'
import OrderHistory from './OrderHistory'
import Favourites from './Favourites'

const routes    = () => {
	
   return <Router>
	<div>
      <Route exact path   = "/"           component = {App}/>
      <Route path   = "/Shop"             component = {Shop}/>
	  <Route path   = "/About"            component = {About}/>
	  <Route path   = "/Cart"             component = {Cart}/>
	  <Route path   = "/My Account"       component = {Account}/>
	  <Route path   = "/Sign In"          component = {SignIn}/>
	  <Route path   = "/Orders"           component = {OrderHistory}/>
	  <Route path   = "/Favourites"       component = {Favourites}/>
	
	</div>
         </Router>

}

export default routes