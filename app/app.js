(function () {
'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', ['ngRoute','ngCookies'])
    .config(config)
    .run(run);

    config.$inject = ['$locationProvider', '$routeProvider'];
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.html',
                controllerAs: 'vm'
            })
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.html',
                controllerAs: 'vm'
            })
            .when('/movies', {
                controller: 'MovieController',
                templateUrl: 'movies/movies.html',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/movies'});
    }

    run.$inject = ['$rootScope', '$location','$cookies','$http'];
    function run($rootScope, $location, $cookies, $http) {
        $rootScope.globals = $cookies.getObject('globals') || {};
        if($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            // if(restrictedPage && !loggedIn) {
            //     $location.path('/login');
            // }
        });
    }
})();