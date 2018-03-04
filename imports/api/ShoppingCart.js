
export const ShoppingCart = new Meteor.Collection(null);
//passing null as argument to Meteor.Collection is what makes the collection client 
//side only.
var ShoppingCartObserver = new LocalPersist(ShoppingCart, 'ShoppingCart');
//using the LocalPersist package we install we connect local storage to mongo, and use can save our data in the browser.
//after that we can use the standard mongo syntax.