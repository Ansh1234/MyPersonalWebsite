'use strict';
 
app.controller('MainController', function ($scope) 
	{
        $scope.selectedPerson=null,
        $scope.place="anshul",

         $scope.people = [
        {
            id: 0,
            name: 'Leon',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'Rock',
                'Metal',
                'Thrash Metal',
                'Heavy Metal'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Allyce',
            music: [
                'Pop',
                'RnB',
                'Hip Hop'
            ],
            live: true
        }
    ];
    $scope.AddNew=function()
    {
        if($scope.NewPerson != null && $scope.NewPerson!= "")
        {
            $scope.people.push(
            {
                id:$scope.people.length,
                name:$scope.NewPerson,
                live: true,
                music:[]
            });
        }
    }

  	});