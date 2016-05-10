(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];
    function config($locationProvider, $routeProvder) {
        // $locationProvider.html5Mode(true);
        $routeProvder
            .when('/', {
                templateUrl: './app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/blog', {
                templateUrl: './app/blog/blog.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            });
    }
}());
