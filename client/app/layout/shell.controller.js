(function() {
'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$scope'];
    function ShellController($scope) {
        var vm = this;
        $scope.test = 'Łuaksz';

        activate();

        ////////////////

        function activate() {

        }

    }
})();
