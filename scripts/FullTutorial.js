'use strict';
 
app.controller('FullTutorial', function ($scope,$http) 
	{
	
		
    
 	$scope.PostComment=function()
 	{
 		var name=$('#name').text();
 		var id=$('#id').text();
 		if(name=="" && id=="")
 			{
 					$('#postbutton').hide();
				$('#facebookloginbutton').show();
 			}
 		else
 		{
 		
 		 var data = {
 		
            'Name' : name,
            'Comment' : $scope.comment_input,
            'ImageUrl': id
        };
        $scope.comment_input='';
        var data_serialized=$.param (data);

        $http.post('../php/new.php', data_serialized)
        .success(function(data, status, headers, config)
        {
            console.log(status + ' - ' + data);
        })
        .error(function(data, status, headers, config)
        {
            console.log('error');
        });

 		}
 	

 	}

  	});