function PostedCommentsCtrl($scope,$http) 
{
  
	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

   

        $http.get('../php/retrivecomments.php')
        .success(function(data, status, headers, config)
        {
            $scope.comments=data;
        })
        .error(function(data, status, headers, config)
        {
            console.log('error');
        });
    

	
    

}