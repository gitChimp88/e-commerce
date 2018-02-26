import { Meteor }       from 'meteor/meteor'
import { Different }   from '../../imports/api/pics'


Meteor.methods({
	
	addPic: function(url, name, price, category){
			
                console.log("addPic meteor method called from the server", url, name, price, category)
		
                Different.insert({url, name, price, category},(err,done)=>{
                        console.log(err + " id = " + done)
                })
        }
})