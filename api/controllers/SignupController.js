/**
 * SignupController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  create: function(req,res){
    res.view("signup/create");
  },

  process: function(req,res){
    var username = req.param("username");
    var password = req.param("password");
    User.create({
    username: username,
    password: password,
    }).done(function(err, user) {

    // Error handling
    if (err) {
      return console.log(err);

    // The User was created successfully!
    }else {
      res.redirect('/');
      console.log("User created:", user);
    }
    });
  },    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SignupController)
   */
  _config: {}

  
};
