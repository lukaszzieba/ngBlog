(function() {
    'use strict';

    angular.module('app', [
        // vendor
        'ui.router',

        // my
        'account.module',
        'admin.module'

    ]);
}());

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
                templateUrl: './app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "./app/blog/blog.html",
                controller: 'BlogController',
                controllerAs: 'vm'
            })
            .state('blogDeyails', {
                url: "/blog/:id",
                templateUrl: './app/blog/blog-post-details.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            });
    }
    run.$inject = ['$state'];

    function run($state) {

    }
}());
