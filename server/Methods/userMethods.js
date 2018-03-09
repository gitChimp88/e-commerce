import { Meteor }       from 'meteor/meteor'
import { Products }   from '../../imports/api/pics'
import {Accounts}       from 'meteor/accounts-base'
import { Starred }   from '../../imports/api/favourites'
import {Orders} from '../../imports/api/orders'
import { Email } from 'meteor/email'
import {Category} from '../../imports/api/category'




Meteor.methods({
	
	addPic: function(url, name, price, category, stock, sold, description){
			
                console.log("addPic meteor method called from the server", url, name, price, category, stock, sold, description)
		
                Products.insert({url, name, price, category, stock, sold, description},(err,done)=>{
                        console.log(err + " id = " + done)
                })
        },
	
	updatePic:function(id, name, price, category, stock, url, description){
			  console.log("updatePic meteor method the id is = ", id)
			  Products.update({_id:id},{ $set:{ name:name, price:price, category:category, stock:stock, url:url, description:description }
			  })
		},
	
	
	updateStock:function(id, stock, sold){
		Products.update({_id:id},{ $set:{ stock:stock, sold:sold }
			  })
	},
	 removePic:function(id){
                console.log("removePic meteor method called from the server Product id = ", id)
                Products.remove({_id:id})
        },
	 createUserInServer: function (email, password, name, address) {
          Accounts.createUser({
			                email : email,
                            password : password,
                            profile  : {
                                //publicly visible fields like firstname goes here
								name: name,
								address: address
                            }
		  })
    },
	
	createRole: function(id, role){
		Roles.addUsersToRoles(id, role);
	},
	 updateUser: function (id, name, address) {
          Meteor.users.update( {_id: id}, {$set: { "profile.name": name, "profile.address": address }})
    },
	
	addFavourite: function(name, price, url, productId, stock, quantity, sold){
		console.log("addFavourite meteor method called from the server")
		var userId = this.userId
		Starred.insert({userId, name, price, url, productId, stock, quantity, sold},(err,done)=>{
			console.log(err + " id = " + done)
		});
	},
	
	removeFavourite: function(id){
		console.log("removeFavourite meteor method called from the server, id = ", id)
                Starred.remove({_id:id})
	},
	
	addOrder: function(url, name, price, quantity, address, email, product){
		console.log("addOrder meteor method called from the server")
		
		if(this.userId){
			var user = this.userId
			Orders.insert({user, url, name, price, quantity, address, email, product},(err,done)=>{
			console.log(err + " id 1= " + done)
		});
		} else {
			Orders.insert({url, name, price, quantity, address, email, product},(err,done)=>{
			console.log(err + " id 2 = " + done)
		});
		}
	},
	
	sendEmail: function(to, from, subject, text) {
    // Make sure that all arguments are strings.
    
		     
 
			 this.unblock();

             Email.send({ to, from, subject, text });
			
		  

   
  },
	
	addCategory: function(name){
			
                console.log("addCategory meteor method called from the server", name)
		
                Category.insert({name},(err,done)=>{
                        console.log(err + " id = " + done)
                })
        },
	
		
		
	
	
	

	
})