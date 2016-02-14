(function() {


   // var custApp = angular.module('customerApp', ['ngRoute', 'ngAnimate']);
    var app = angular.module('resumeApp', ['ngRoute', 'ngAnimate']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })
            .when('/resume', {
                controller: 'ResumeController',
                templateUrl: 'app/views/resume.html'
            })
            .when('/resume-timeline', {
                controller: 'ResumeController',
                templateUrl: 'app/views/resume-timeline.html'
            })
            .when('/profile', {
                controller: 'ProfileController',
                templateUrl: 'app/views/profile.html'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'app/views/register.html'
            })
            .when('/test', {
                controller: 'RegisterController',
                templateUrl: 'app/views/test.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

    app.run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                componentHandler.upgradeAllRegistered();
            });
        });
    });

}());