import { Meteor }       from 'meteor/meteor'

var Stripe = StripeAPI("sk_test_dgOO85USipfM6fNPgCy55OcY");
var Future = Npm.require('fibers/future');


var charge = (token, amount, email)=>{

  var future = new Future
  
  Stripe.charges.create({
      source: token.id,
      amount: amount,
      currency: 'gbp',
      receipt_email: email,
  },(error,results)=>{
    if(error) {
      future.return(error)
    }else if(results) {
      //here you could run a function for example in case of success
      future.return(results)
    }
  })
    return future.wait();
}

Meteor.methods({
	
	StripeChargeMethod: function(token, amount, email){
			try{
			  var data = charge(token, amount, email)
			  console.log('***********************success***********************?')
			  return data
			}catch(error){
			  console.log('***********************error***********************?')
			  return error
			}
		  }
})