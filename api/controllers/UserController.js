/**
 * UserController
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
  profile: function(req,res){
    User.findOne(req.session.userId).done(function(err, user) {

      // Error handling
      if (err) {
      return console.log(err);

      // The User was found successfully!
      } else {
        username = user.username;
        email = user.email;
        age = user.age;
        console.log("User found:", user);
      }
    });
    res.view("user/profile", {username: username, email: email, age: age});
  },
  searchMembers: function(req,res){
    res.view("home/searchmembers");
  },
  searchResults: function(req,res){
    var sex = req.param("sex");
    var age1 = req.param("age1");
    var age2 = req.param("age2");

    switch(sex) {
      case "Any":
        var sex1 = "Male";
        var sex2 = "Female";
        break;
      case "Male":
        var sex1 = "Male";
        var sex2 = "";
        break;
      case "Female":
        var sex1 = "";
        var sex2 = "Female";
        break;
      default:
        var sex1 = "Male";
        var sex2 = "Female";
    }

    User.find({
      or: [{sex: sex1}, {sex: sex2}],
      age: {
        '>=': age1,
        '<=': age2
      }
    }).done(function(err, users) {

      // Error handling
      if (err) {
      return console.log(err);

      // The User was found successfully!
      } else {
        console.log("Users found:", users);
        res.view("home/searchresults", {users: users});
      }
    });
    
  },   
   
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
