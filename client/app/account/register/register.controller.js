(function() {
    'use strict';

    angular
        .module('account.module')
        .controller('RegisterController', RegisterController);
    RegisterController.$inject = ['$http', 'store', '$state']

    function RegisterController($http, store, $state) {
        var vm = this;

        vm.register = function(user) {
            $http({
                url: '/register',
                method: 'POST',
                data: user
            }).then(function(response) {
                store.set('jwt', response.data.id_token);
                $state.go('home')
            }, function(err) {
                console.log(err.data);
            });
        }

        activate();

        function activate() {

        }
    }
}());
