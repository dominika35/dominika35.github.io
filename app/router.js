import Ember from 'ember';

var Router = Ember.Router.extend();

Router.map(function() {

  this.route('wladze');

  this.route('lokalizacja');

  this.route('produkty');

  this.route('historia');

  this.route('klienci');
  

});

export default Router;
