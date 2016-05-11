(function() {
    'use strict';

    angular
        .module('admin.module')
        .config(function($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: "/admin",
                    templateUrl: './app/admin/admin.html',
                    controller: 'AdminController',
                    controllerAs: 'vm'
                });
        })
}());
