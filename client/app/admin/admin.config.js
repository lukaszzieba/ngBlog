(function() {
    'use strict';

    angular
        .module('admin.module')
        .config(function($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: "/admin",
                    // template: '<admin></admin>',
                    templateUrl: './app/admin/admin.html',
                    controller: 'AdminController',
                    data: {
                      requiresLogin: true
                    }
                });
        })
}());
