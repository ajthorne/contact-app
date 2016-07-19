import $ from 'jquery';
import nav from './nav';
import contactCollection from '../collections/contactscollection';
import user from '../models/username';
import router from '../router';

let renderNewContact = function () {
  let newContactForm = $(`
    <div class="contact-form">
    <h2>Contact Information</h2>
    <input id="full-name" type="text" placeholder="Enter first name">
    <input id="nickname" type="text" placeholder="Enter last name">
    <input id="email" type="text" placeholder="Enter email address">
    <input id="number" type="text" placeholder="Enter phone number">
    <input class="add-contact" type="button" value="Create contact">
    `);

    $('.container').empty().append(nav).append(newContactForm);

    $('.add-contact').on('click', function () {
      contactCollection.create({
        'FullName': $('#full-name').val(),
        Nickname: $('#nickname').val(),
        'EmailAddress': $('#email').val(),
        'PhoneNumber': $('#number').val()},{
        headers: {
          Authorization: `Kinvey ${user.authtoken}`
        },
        success: function(response) {
          console.log('You added a new contact!');
          router.navigate('contacts', {trigger: true});
        },
        error: function () {
          console.log('You failed to add a contact!');
        }
      });
    });
};

export default renderNewContact;
