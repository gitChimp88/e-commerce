import { Meteor } from 'meteor/meteor';
import { Products }   from '../imports/api/pics'

Meteor.startup(() => {
  // code to run on server at startup
	
    Accounts.config({
      forbidClientAccountCreation: true
    });
	
     process.env.MAIL_URL = "smtps://postmaster%40sandboxd89cf558d24c490d974b07125f95ad6b.mailgun.org:96f1ebe4f83c5ceb6ca6782eae629267-2b4c5a6c-a3f0a958@smtp.mailgun.org:465";
	
	Cloudinary.config({
			cloud_name: 'dsj3kwygd',
			api_key: '762566649282763',
			api_secret: 'LjYiUwYkJ3k7l0r0aMU250Eno48'
		})
});

