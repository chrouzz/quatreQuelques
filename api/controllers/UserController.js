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
    
    var username = req.param('username');

    if(username == null) {
      User.findOne(req.session.userId).done(function(err, user) {

        // Error handling
        if (err) {
        return console.log(err);

        // The User was found successfully!
        } else {
          var myself = 1;
          username = user.username;
          email = user.email;
          sex = user.sex;
          age = user.age;
          console.log("User found:", myself);
          res.view("user/profile", {myself:myself, username: username, email: email, sex: sex, age: age});
        }
      });
    } else {
      User.findOne({
        username: username
      }).done(function(err, user) {

        // Error handling
        if (err) {
        return console.log(err);

        // The User was found successfully!
        } else {
          var myself = 0;
          username = user.username;
          sex = user.sex;
          age = user.age;
          console.log("User found:", myself);
          res.view("user/profile", {myself: myself, username: username, sex: sex, age: age});
        }
      });
    }
  },
  searchMembers: function(req,res){
    res.view("home/searchmembers");
  },
  searchResults: function(req,res){
    var sex = req.param("sex");
    var age1 = req.param("age1");
    var age2 = req.param("age2");
    var sort = req.param("sort");
    var page = req.param("page");
    var numberOfResults = 0;
    
    if(sex == null && age1 == null && age2 == null && sort == null) {
      if(typeof req.session.sex != 'undefined') {
        sex = req.session.sex;
        age1 = req.session.age1;
        age2 = req.session.age2;
        sort = req.session.sort;
      } else {
        console.log("Error");
      }
    } else {
      req.session.sex = sex;
      req.session.age1 = age1;
      req.session.age2 = age2;
      req.session.sort = sort;
    }
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

    if(sort.indexOf("age") != -1) {
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
          numberOfResults = users.length;
        }
      });
      User.find({
        or: [{sex: sex1}, {sex: sex2}],
        age: {
          '>=': age1,
          '<=': age2
        }
      }).paginate({page: parseInt(page), limit: 2})
      .sort('age ASC')
      .done(function(err, users) {

        // Error handling
        if (err) {
        return console.log(err);

        // The User was found successfully!
        } else {
          console.log("Users found:", numberOfResults);
          res.view("home/searchresults", {users: users, numberOfResults: numberOfResults, page: page});
        }
      });
    } else if(sort.indexOf("createdAt") != -1) {
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
          numberOfResults = users.length; 
        }
      });
      User.find({
        or: [{sex: sex1}, {sex: sex2}],
        age: {
          '>=': age1,
          '<=': age2
        }
      }).paginate({page: parseInt(page), limit: 2})
      .sort('createdAt DESC')
      .done(function(err, users) {

        // Error handling
        if (err) {
        return console.log(err);

        // The User was found successfully!
        } else {
          console.log("Users found:", numberOfResults);
          res.view("home/searchresults", {users: users, numberOfResults: numberOfResults, page: page});
        }
      });
    }
    
  },   
   
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};
