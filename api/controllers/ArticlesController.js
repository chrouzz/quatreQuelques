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

  loadArticleTitles: function(req, res) {
    var articlesCategory = req.param('category');
    Article.find({
      category: articlesCategory
    }).sort('createdAt DESC')
    .done(function(err, articles) {
  

      // Error handling
      if (err) {
        return console.log(err);
      // The User was created successfully!
      } else {
        articles = [{category: 'tourism', title: 'Des prouts partout'}, 
        {category: 'tourism', title: 'Avalanche de merde au pays des mouches, les habitants furieux.'},
        {category: 'kpop', title: 'P. Katerin en concert'},
        {category: 'surgery', title: 'Toujours plus moche avec un coup de rabot'}];
        return res.send(articles);
      }
    });
  },

  loadArticle: function(req,res){
    var articleId = req.param('articleId');    
    Article.find({
      id: articleId
    }).done(function(err, article) {
    

      // Error handling
      if (err) {
        return console.log(err);
      // The User was created successfully!
      } else {
        return res.send(article);
      }
    });
    
  },
    
  
  

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to MessageController)
   */
  _config: {}

};
