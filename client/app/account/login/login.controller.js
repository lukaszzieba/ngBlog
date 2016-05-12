(function() {
    'use strict';

    angular
        .module('account.module')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$http', 'store', '$state']

    function LoginController($http, store, $state) {
        var vm = this;

        vm.login = function(user) {
            $http({
                url: '/login',
                method: 'POST',
                data: user
            }).then(function(response) {
                store.set('jwt', response.data.id_token);
                $state.go('home');
            }, function(err) {
                console.log(err.data);
            });
        }

        activate();

        function activate() {

        }
    }
}());
