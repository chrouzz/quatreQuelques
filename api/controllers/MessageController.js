/**
 * MessageController
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

	sendPage: function(req,res){
    var userId = req.param('userId');
    User.findOne({
      userId: userId
    }).done(function(err, user) {
      

      // Error handling
      if (err) {
        return console.log(err);
      // The User was created successfully!
      } else {
      	res.view("user/sendmessage", {user: user});
        console.log("User found:", user);
      }
    });
  },

  loadMessageTitles: function(req,res){
    var userId = req.param('userId');
    var boxType = req.param('boxType');
    if(boxType.indexOf('inbox') != -1) {
      Message.find({
        receiverId: userId
      }).sort('createdAt DESC')
      .done(function(err, messages) {
      

        // Error handling
        if (err) {
          return console.log(err);
        // The User was created successfully!
        } else {
          return res.send(messages);
        }
      });
    } else if(boxType.indexOf('sent') != -1) {
      Message.find({
        senderId: userId
      }).sort('createdAt DESC')
      .done(function(err, messages) {
      

        // Error handling
        if (err) {
          return console.log(err);
        // The User was created successfully!
        } else {
          return res.send(messages);
        }
      });
    }
    
  },

  loadConversation: function(req,res){
    var userId = req.param('userId');
    var contactId = req.param('contactId');
    
    Message.find({
      or: [{senderId: userId, receiverId: contactId},
           {senderId: contactId, receiverId: userId}]
    }).sort('createdAt DESC')
    .done(function(err, messages) {
    

      // Error handling
      if (err) {
        return console.log(err);
      // The User was created successfully!
      } else {
        return res.send(messages);
      }
    });
    
  },
    
  
  

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MessageController)
   */
  _config: {}

};
