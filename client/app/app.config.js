(function() {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                template: '<home></home>'
            })
            .state('blog', {
                url: "/blog",
                template: '<blog></blog>'
            })
            .state('blogDeyails', {
                url: "/blog/:id",
                template: '<blog-post-details></blog-post-details>'
            });
    }
    run.$inject = ['$state'];

    function run($state) {

    }
}());
