angular.module('Calorie Counter', ['ionic', 'Calorie Counter.controllers', 'Calorie Counter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
      		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url: "/app",//SETING THE URL
    	abstract: true,
    	templateUrl: "templates/menu.html"//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
	})

	.state('app.home', {
		url: "/home",//SETING THE URL
		views: {
			'menuContent': {
				templateUrl: "templates/home.html",//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
				controller: 'HomeCtrl'
			}
		}
	})
  .state('app.about', {
    url: "/about",//SETING THE URL
    views: {
			'menuContent': {
				templateUrl: "templates/about.html",//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
				
      }
    }
  })
  .state('app.settings', {
    url: "/settings",//SETING THE URL
    views: {
			'menuContent': {
				templateUrl: "templates/settings.html",//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
				controller: 'SettingsCtrl'
      }
    }
  })
     .state('app.add', {
    url: "/add",//SETING THE URL
    views: {
			'menuContent': {
				templateUrl: "templates/addCal.html",//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
				controller: 'HomeCtrl'
      }
    }
  })
  .state('app.goal', {
    url: "/goal",//SETING THE URL
    views: {
			'menuContent': {
				templateUrl: "templates/goal.html",//TELLING THE COMPUTER WHERE TO GO TO GET THE HTML PAGE
				controller: 'GoalCtrl'
      }
    }
  });
	
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/home');
});
