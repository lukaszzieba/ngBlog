(function() {
'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);        

    ShellController.$inject = [];
    function ShellController() {
        var vm = this;
        vm.test = '';

        activate();

        ////////////////

        function activate() {
            vm.test = 'Its alive'
        }

    }
})();
