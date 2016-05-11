(function() {
    'use strict';

    angular
        .module('account.module')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: './app/account/login.html',
                controller: 'AccountController',
                controllerAs: 'vm'
            })
            .state('signup', {
                url: "/signup",
                templateUrl: './app/account/signup.html',
                controller: 'AccountController',
                controllerAs: 'vm'
            });
    }
}());
