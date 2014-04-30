'use strict';
//var app=angular.module('MyTutorialApp',[])
var app=angular
  .module('Mypersonalwebsite', [
   'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    ]);

  app.config(function ($routeProvider) {
    console.log("In app")
    $routeProvider
      .when('/', {
        
        templateUrl: 'Contents.html',
       controller: 'ContentsCtrl'
      })
      .otherwise({
        
        redirectTo: '/'
      });
       $routeProvider
      .when('/tutorials', {
        
        templateUrl: 'Tutorials.html',
       controller: 'TutorialsCtrl'
      });
        $routeProvider
      .when('/contacts', {
        
        templateUrl: 'Contacts.html',
       controller: 'ContactsCtrl'
      });
      $routeProvider
       .when('/FullTutorial', {
        
        templateUrl: 'FullTutorial.html',
       controller: 'FullTutorial'
      });
     
  });
