(function() {
    'use strict';

    angular
        .module('admin.module')
        .config(function($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: "/admin",
                    template: '<admin></admin>',
                    controller: 'AdminController',
                    data: {
                      requiresLogin: true
                    }
                });
        })
}());
