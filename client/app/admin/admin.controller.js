(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminController', AdminController);

    AdminController.$inject = [];

    function AdminController() {
        var vm = this;
        
        activate();

        function activate() {

        }
    }
}());
