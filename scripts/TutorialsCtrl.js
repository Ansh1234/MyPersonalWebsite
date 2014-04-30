'use strict';
 
app.controller('TutorialsCtrl', function ($scope,$location) 
	{
    
 	$scope.tutorial_names=[
 			{'name':"Sencha Touch: Making your First Application"},
 			{'name':"Sencha Touch: MVC Framework"},
 			{'name':"Sencha Touch: Deployment to Android and other real devices"},
 			{'name':"Sencha Touch: Making your First Application"},
 			{'name':"Sencha Touch: MVC Framework"},
 			]

 	$scope.Tutorial_full=function(index)
 	{
 		$location.path('/FullTutorial');
 	}

  	});