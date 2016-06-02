(function() {
    'use strict';

    angular
        .module('app')
        .component('navBar', {
            templateUrl: './app/layout/nav/nav-bar.html',
            controller: 'ShellController'
        });
}());
