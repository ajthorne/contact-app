import Backbone from 'backbone';
import $ from 'jquery';
import Contact from '../models/contactmodel';
import settings from '../settings';


let Contacts = Backbone.Collection.extend({
  model: Contact,
  url: `https://baas.kinvey.com/appdata/${settings.appId}/contacts`
});

let contactCollection = new Contacts();

export default contactCollection;
