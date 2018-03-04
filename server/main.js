import { Meteor } from 'meteor/meteor';
import { Products }   from '../imports/api/pics'

Meteor.startup(() => {
  // code to run on server at startup
	
    Accounts.config({
      forbidClientAccountCreation: true
    });

	
	Cloudinary.config({
			cloud_name: 'dsj3kwygd',
			api_key: '762566649282763',
			api_secret: 'LjYiUwYkJ3k7l0r0aMU250Eno48'
		})
});

