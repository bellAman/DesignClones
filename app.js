angular.module("clones", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state("home",{
      url:"/",
      templateUrl:"./templates/myPage.html",
      controller:"myPageCTRL"
    })
    .state('seven-grams',{
      url:"/seven-grams",
      templateUrl:"./templates/seven-grams.html",
    })
})
