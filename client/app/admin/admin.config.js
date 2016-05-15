(function() {
    'use strict';

    angular
        .module('admin.module')
        .config(function($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: "/admin",
                    template: '<admin></admin>',
                    data: {
                      requiresLogin: true
                    }
                })
                .state('admin.dashboard', {
                    url: "/dashboard",
                    template: '<dashboard></dashboard>',
                    data: {
                      requiresLogin: true
                    }
                })
                .state('admin.editor', {
                    url: "/editor",
                    template: '<editor></editor>',
                    data: {
                      requiresLogin: true
                    }
                });

        })
}());
