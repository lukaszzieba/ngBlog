(function() {
    'use strict';

    angular
        .module('account.module')
        .component('register', {
            bindings: {},
            templateUrl: './app/account/register/register.html',
            controller: 'RegisterController'
        });
}());
