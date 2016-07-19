import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';

let Contact = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appId}/contacts`,
  default: {
    'FullName': '',
    Nickname: '',
    'EmailAddress': '',
    'PhoneNumber': ''
  }
});

export default Contact;
