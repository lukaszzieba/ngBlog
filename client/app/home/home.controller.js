(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
        var vm = this;
        vm.name = "Łuaksz";

        // API tests
        vm.publicApi = function() {
            $http({
                url: '/api/public',
                method: 'GET'
            }).then(function(responese) {
                console.log(responese.data);
                vm.publicApiResponse = responese.data;
            }, function(err) {
                vm.publicApiResponse = err.data;
            })
        }

        vm.protecteApi = function() {
            $http({
                url: '/api/protected',
                method: 'GET'
            }).then(function(responese) {
                console.log(responese.data);
                vm.protectedApiResponse = responese.data;
            }, function(err) {

                vm.protectedApiResponse = err.statusText + ' ' + err.status;
            })
        }

        // ---------
        activate();

        ////////////////

        function activate() {}
    }
}());
