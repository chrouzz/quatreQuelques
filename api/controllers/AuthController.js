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
var sailsTokenAuth = require("../services/jwt");

module.exports = {


  process: function(req,res){
    passport.authenticate('local', function(err, user, info){
      if ((err) || (!user)) {
        return res.json(401, {err: 'email and password required'});
      }
      req.logIn(user, function(err){
        if (err) { 
          return res.json(401, {err: 'invalid email or password'});
        }
        req.session.userId = user[0].id;
        return res.json({user: user, token: sailsTokenAuth.issueToken(user[0].id)});
      });
    })(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.send('logout successful');
  },
  _config: {}

};
