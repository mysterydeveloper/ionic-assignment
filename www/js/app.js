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
		url: "/app",//setting the url
    	abstract: true,
    	templateUrl: "templates/menu.html"//setting the it can be found
	})

	.state('app.home', {
		url: "/home",//setting the url
		views: {
			'menuContent': {
				templateUrl: "templates/home.html",//setting the it can be found
				controller: 'HomeCtrl'//setting the controler
			}
		}
	})
  .state('app.settings', {
    url: "/settings",//setting the url
    views: {
			'menuContent': {
				templateUrl: "templates/settings.html",//setting the it can be found
				controller: 'SettingsCtrl'//setting the controler
      }
    }
  });
	
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/home');//setting the defualt if none of them are picked
});
