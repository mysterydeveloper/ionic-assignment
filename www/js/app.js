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
		url: "/app",
    	abstract: true,
    	templateUrl: "templates/menu.html"
	})

	.state('app.home', {
		url: "/home",
		views: {
			'menuContent': {
				templateUrl: "templates/home.html",
				controller: 'HomeCtrl'
			}
		}
	})
  .state('app.about', {
    url: "/about",
    views: {
			'menuContent': {
				templateUrl: "templates/about.html",
				
      }
    }
  })
  .state('app.settings', {
    url: "/settings",
    views: {
			'menuContent': {
				templateUrl: "templates/settings.html",
				controller: 'SettingsCtrl'
      }
    }
  })
     .state('app.add', {
    url: "/add",
    views: {
			'menuContent': {
				templateUrl: "templates/addCal.html",
				controller: 'HomeCtrl'
      }
    }
  })
  .state('app.goal', {
    url: "/goal",
    views: {
			'menuContent': {
				templateUrl: "templates/goal.html",
				controller: 'GoalCtrl'
      }
    }
  });
	
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/home');
});
