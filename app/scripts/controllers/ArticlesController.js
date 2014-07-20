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

  $scope.title = 'initial';
  $scope.summary = 'initial';

  this.changeSummary = function (title, summary) {
    $scope.title = title;
    $scope.summary = summary;
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

  this.article = {};
  //$scope.message.title = "Re:";

  $scope.save = function () {
    var category = this.article.category;
    var thumbUrl = this.article.thumbUrl;
    var title = this.article.title;
    var header = this.article.header;
    var headerPictureUrl = this.article.headerPictureUrl;
    var body = this.article.body;
    var footerPictureUrl = this.article.footerPictureUrl;

    var Article = $resource('/article');
    $scope.article = new Article({});
    $scope.article.authorId = $cookieStore.get('id');
    $scope.article.category = category;
    $scope.article.thumbUrl = thumbUrl;
    $scope.article.title = title;
    $scope.article.header = header;
    $scope.article.headerPictureUrl = headerPictureUrl;
    $scope.article.body = body;
    $scope.article.footerPictureUrl = footerPictureUrl;
    $scope.article.$save(function () {
      $location.path('/');

    });

  };

});