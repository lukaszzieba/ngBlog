(function() {
    'use strict';

    angular
        .module('account.module')
        .component('login', {
            bindings: {},
            templateUrl: './app/account/login/login.html',
            controller: 'LoginController'
        });
}());
