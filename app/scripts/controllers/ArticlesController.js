angular.module('barmaddenApp').controller('ArticlesController', function ($scope, $resource, $routeParams, $cookieStore, $location) {
  
  this.tab = 1;
  this.articlesCategory = {category: 'tourism'};
  var Article = $resource('/articles', this.articlesCategory);
  this.storedArticles  = Article.query();
  console.log(this.storedArticles);

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };

  //var Message = $resource('/message');
  //$scope.message = new Message({});

  this.loadArticleTitles = function (category) {
    this.articleOpened = 0;
    this.articlesCategory = {category: category};
    var Articles = $resource('/articles', this.articlesCategory);
    this.storedArticles  = Articles.query(); //(function () {
      //console.log($scope.storedMessages);
    //});
    
  };

  this.article = {};

  this.loadArticle = function (articleId) {
    this.articleOpened = 1;
    this.article = {articleId: articleId};
    var Article = $resource('/article/view', this.article);
    this.storedArticle  = Article.query(); //(function () {
      //console.log($scope.storedMessages);
    //});
    
  };

});