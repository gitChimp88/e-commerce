import { Meteor } from 'meteor/meteor';

import React from 'react';

import { render } from 'react-dom';

import routes from '../imports/routes.js';




Meteor.startup(() => {
	
	   $.cloudinary.config({
        cloud_name:"dsj3kwygd"
    })
	
        render(
                routes(), 
                document.getElementById('app')
                
        )
});
