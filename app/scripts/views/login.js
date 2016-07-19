import $ from 'jquery';
import Backbone from 'backbone';
import settings from '../settings';
import user from '../models/username';
import router from '../router';

let renderLogin = function() {
let login = $(`
      <div class="login">
      <h2 class="title">My Contacts</h2>
      <input class="username" type="text" placeholder="Enter your username">
      <input class="password" type="password" placeholder="Enter your password">
      <input class="submit" type="button" value="Log in">
      </div>
      <p class="signup-link">Not a current user? Sign up <a href="#signup">here</a>.</p>
  `);

  $('.container').empty().append(login);

  $('.submit').on('click', function (evt) {
    let username = $('.username').val();
    let pw = $('.password').val();
    //storing values input from user
    console.log(username, pw);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appId}/login`,
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
        //storing authtoken which will be used to render specific user information
        console.log(user.authtoken);
        console.log('You successfully logged in!');
        router.navigate('contacts', {trigger: true});
      },
      error: function () {
        console.log('You failed to log in!');
      }
    });
  });
};

export default renderLogin;
