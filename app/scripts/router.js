import $ from 'jquery';
import Backbone from 'backbone';
import renderSignUp from './views/signup';
import renderLogin from './views/login';
import renderContacts from './views/contacts';
import renderNewContact from './views/newcontact';

const Router = Backbone.Router.extend({
  routes: {
    signup: 'signUpFunction',
    login: 'loginFunction',
    newcontact: 'newContactFunction',
    contacts: 'allContactsFunction',
    '/*': 'loginFunction'
  },

  signUpFunction: function() {
    renderSignUp();
  },

  loginFunction: function() {
    renderLogin();
  },

  newContactFunction: function () {
    renderNewContact();
  },

  allContactsFunction: function () {
    renderContacts();
  }
});

const router = new Router();

export default router;
