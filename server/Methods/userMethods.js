import { Meteor }       from 'meteor/meteor'
import { Products }   from '../../imports/api/pics'
import {Accounts}       from 'meteor/accounts-base'
import { Profile }   from '../../imports/api/profile'


Meteor.methods({
	
	addPic: function(url, name, price, category, stock, sold){
			
                console.log("addPic meteor method called from the server", url, name, price, category, stock, sold)
		
                Products.insert({url, name, price, category, stock, sold},(err,done)=>{
                        console.log(err + " id = " + done)
                })
        },
	
	updatePic:function(id, name, price, category, stock){
			  console.log("updatePic meteor method the id is = ", id)
			  Products.update({_id:id},{ $set:{ name:name, price:price, category:category, stock:stock }
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
	addProfileInfo: function(userId, name, email, role){
		console.log("addProfileInfo meteor method called from the server")
		Profile.insert({userId, name, email, role},(err,done)=>{
			console.log(err + " id = " + done)
		});
	},
	createRole: function(id, role){
		Roles.addUsersToRoles(id, role);
	}
	

	
})