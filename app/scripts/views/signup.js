import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import user from '../models/username';

let renderSignUp = function() {
let signUp = $(`
      <div class="sign-up">
      <h2>Sign Up</h2>
      <input class="username" type="text" placeholder="Enter a username">
      <input class="password" type="password" placeholder="Enter a password">
      <input class="submit" type="button" value="Register">
      </div>
      <p class="signup-link">Already a current user? Log in <a href="#login">here</a>.</p>
  `);

  $('.container').empty().append(signUp);

  $('.submit').on('click', function (evt) {
    let username = $('.username').val();
    let pw = $('.password').val();
    console.log(username, pw);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appId}/`,
      data: JSON.stringify({
        username: username,
        password: pw
      }),
      contentType: 'application/json',
      headers: {
        Authorization: `Basic ${settings.baseAuth}`
      },
      success: function(response) {
        user.username = username;
        user.authtoken = response._kmd.authtoken;
        console.log(user.authtoken);
        console.log('You successfully signed up!');
      },
      error: function () {
        console.log('You failed to sign up!');
      }
    });
  });
};

export default renderSignUp;
