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
                template: '<login></login>',
                // component: 'login'
            })
            .state('register', {
              url: '/register',
              template: '<register></register>',
              // component: 'register'

            });
    }
}());
