/**
 * AuthController
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

var passport = require("passport");
module.exports = {
  login: function(req,res){
    res.view("auth/login");
  },

  process: function(req,res){
    console.log('process controller api');
    passport.authenticate('local', function(err, user, info){
      if ((err) || (!user)) {
        return res.send({ code: 0, status: "loggin failed"});
      }
      req.logIn(user, function(err){
        if (err) { 
          return res.send({ status: "loggin failed"}); 
        }
        req.session.userId = user[0].id;
        console.log("User logged in:", req.session.userId);
        return res.send({ code: 1, status: "logged"});
      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },
  _config: {}
};
