(function() {
    'use strict';

    angular
        .module('admin.module')
        .component('admin', {
            bindings: {},
            templateUrl: './app/admin/admin.html',
            controller: 'AdminController'
        });
}());
