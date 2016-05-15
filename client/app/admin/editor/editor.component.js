(function() {
    'use strict';

    angular
        .module('admin.module')
        .component('editor', {
            bindings: {},
            templateUrl: './app/admin/editor/editor.html',
            controller: 'EditorController'       
        });
}());
