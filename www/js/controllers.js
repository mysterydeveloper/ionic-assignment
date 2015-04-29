angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	$scope.result= $localstorage.getObject('result');
	$scope.height= $localstorage.getObject('height');
	$scope.first= $localstorage.getObject('first');
	$scope.last= $localstorage.getObject('last');
	$scope.weights= $localstorage.getObject('weights');
	$scope.goalz= $localstorage.getObject('goalz');
	$scope.ENDgoalz=$scope.goalz-$scope.result;

	// default values for user
	$scope.user = {
		firstName: "Default",
		lastName: "User",
        		weight: "10",
        		height: "5,11"
	};
	
	// functions at start up 
	$scope.$on("$ionicView.enter", function(){
  
		// load user details
		if($localstorage.getObject('user') != null){
			$scope.user = $localstorage.getObject('user');
		} // end if
        
	});
    $scope.add=function(num1,num2)
    {
if (num2.value == '') { 

  // stop submission until textbox is not '' 
} 
      $scope.result=parseInt(num1)+parseInt(num2);
        $localstorage.setObject('result', $scope.result);
         location.reload();
        
    };
     $scope.reset=function()
    {
      $scope.result=0;
        $localstorage.setObject('result', $scope.result);
         location.reload();
    };
	
}) //end HomeCtrl



   	