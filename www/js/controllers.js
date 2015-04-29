angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	
	$scope.height= $localstorage.getObject('height');//setting up height
	$scope.first= $localstorage.getObject('first');//setting up firstname
	$scope.last= $localstorage.getObject('last');//setting up lastname
	$scope.weights= $localstorage.getObject('weights');//setting up weight
	

	// default values for user
	//$scope.user = {
	//	firstName: "Default",
	//	lastName: "User",
        	//	weight: "10",
        	//	height: "5,11"
	//};
	
	// functions at start up 
	$scope.$on("$ionicView.enter", function(){
  
		// load user details
		//if($localstorage.getObject('user') != null){
		//	$scope.user = $localstorage.getObject('user');
		//} // end if
        
	});
 
	
}) //end HomeCtrl

// controller for settings page
.controller('SettingsCtrl', function($scope, $localstorage) {

	// function to update e
	$scope.updateDetails = function(firstName,lastName,height,weight){  
	  	// save users deatails
		$scope.height= height;
	  	$localstorage.setObject('height', $scope.height);//saving the height
		$scope.first= firstName;
	  	$localstorage.setObject('first', $scope.first);//saving the first name
		$scope.last= lastName;
	  	$localstorage.setObject('last', $scope.last);//saving the last name
		$scope.weights= weight;
	  	$localstorage.setObject('weights', $scope.weights);//saving the weight
        location.reload();// reload to update all the objects
	 }; // end updateDetails()
$scope.$on("$ionicView.beforeLeave", function(){
     
	});
}); //end SettingsCtrl



   	