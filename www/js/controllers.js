angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	$scope.result= $localstorage.getObject('result');//SET LOCAL STORED RESULT INTO RESULT
	$scope.height= $localstorage.getObject('height');//SET LOCAL STORED HEIGHT INTO HEIGHT
	$scope.first= $localstorage.getObject('first');//SET LOCAL STORED FIRST INTO FIRST
	$scope.last= $localstorage.getObject('last');//SET LOCAL STORED LAST INTO LAST
	$scope.weights= $localstorage.getObject('weights');//SET LOCAL STORED WEIGHT INTO WEIGHT
	$scope.goalz= $localstorage.getObject('goalz');//SET LOCAL STORED GOALZ INTO GOALZ
	$scope.ENDgoalz=$scope.goalz-$scope.result;

	// default values for user 
	//DIDNT ACTUALLY USE TRIED TO BUT IT WOULDNT WORK 
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
	//FUNCTION TO ADD UP THE CALORIES FOR THE DAY
    $scope.add=function(num1,num2)
    {
if (num2.value == '') { 

  // stop submission until textbox is not '' 
} 
      $scope.result=parseInt(num1)+parseInt(num2);//ADDING NUM1 AND NUM2 TOGETHER TO GIVE THE RESULT NUM1 IS ACTUALLY THE PREVIOUS RESULT 
        $localstorage.setObject('result', $scope.result);//SET RESULT INTO RESULT LOCAL STORED TO BE SAVED
         location.reload();//RELOAD TO UPDATE THE PAGE
        
    };
	//FUNCTION TO RESET THE CAORIES FOR THE DAY
     $scope.reset=function()
    {
      $scope.result=0;//SETTING RESULT TO RESET
        $localstorage.setObject('result', $scope.result);//SET RESULT INTO RESULT LOCAL STORED TO BE SAVED
         location.reload();//RELOAD TO UPDATE THE PAGE
    };
	
}) //end HomeCtrl

// controller for settings page
.controller('SettingsCtrl', function($scope, $localstorage) {

	// FUNCTION TO UPDATE THE DETAILS OF THE USER
	$scope.updateDetails = function(firstName,lastName,height,weight){  
	  	// save users deatails
		$scope.height= height;//CHANGE HEIGHT TO THE GIVEN HEIGHT
	  	$localstorage.setObject('height', $scope.height);//SAVING THE NEW HEIGHT
		$scope.first= firstName;//CHANGE FIRST TO THE GIVEN FIRSTNAME
	  	$localstorage.setObject('first', $scope.first);//SAVING THE NEW FIRST
		$scope.last= lastName;//CHANGE LAST TO THE GIVEN LASTNAME
	  	$localstorage.setObject('last', $scope.last);//SAVING THE NEW LAST
		$scope.weights= weight;//CHANGE WEIGHT TO THE GIVEN WEIGHT
	  	$localstorage.setObject('weights', $scope.weights);//SAVING THE NEW WEIGHT
        location.reload();//RELOAD TO UPDATE THE PAGE
	 }; // end updateDetails()
$scope.$on("$ionicView.beforeLeave", function(){
     
	});
}) //end SettingsCtrl
// controller for Goal page
.controller('GoalCtrl', function($scope, $localstorage) {
	
	

	// FUNCTION TO UPDATE THE GOAL
	$scope.updateGoal = function(goal){  
	  
		$scope.goalz= goal;//CHANGE GOALZ TO THE GIVEN GOAL
	  	$localstorage.setObject('goalz', $scope.goalz);//SAVING THE NEW GOALZ
        location.reload();//RELOAD TO UPDATE THE PAGE
	 }; // end updateGoal()
$scope.$on("$ionicView.beforeLeave", function(){
     
	});
}); //end GoalCtrl


   	