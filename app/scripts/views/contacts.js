import $ from 'jquery';
import Backbone from 'backbone';
import nav from './nav';
import contactCollection from '../collections/contactscollection';
import user from '../models/username';

let renderContacts = function () {
  let contactsDisplay = $(`
    <div class="contact-area">
    <h2>Your Contacts</h2>
    <ul class="contact-names">
    </ul>
    <div class="full-contact">
    </div>`);

    contactCollection.fetch({
      //fetch === ajax get
      headers: {
        Authorization: `Kinvey ${user.authtoken}`
      },
      success: function (response) {
        // console.log(response);
        response.forEach(function(item) {
          console.log(item);
          let contactLi = $(`<li class="fullName"><span>Full Name: </span>${item.get('FullName')}</li>
            <li class="nickName">${item.get('Nickname')}</li>
            <li class="emailAddress"><span>Email: </span>${item.get('EmailAddress')}</li>
            <li class="phoneNumber"><span>Number: </span>${item.get('PhoneNumber')}</li>`);
            $('.container').empty().append(nav).append(contactsDisplay);
            $('.contact-names').append(contactLi);
        });
      },
      error: function () {
        console.log('Failed to load contacts');
      }
    });
};

export default renderContacts;
