(function() {
    'use strict';

    angular
        .module('account.module')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$httpProvider', 'jwtInterceptorProvider'];

    function config($stateProvider, $httpProvider, jwtInterceptorProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                template: '<login></login>',
                // component: 'login'
            })
            .state('register', {
                url: '/register',
                template: '<register></register>',
                // component: 'register'

            });

        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('jwt');
        }
        $httpProvider.interceptors.push('jwtInterceptor');
    }

    run.$inject = ['$rootScope', 'store', '$state']

    function run($rootScope, store, $state) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.requiresLogin) {
                if (!store.get('jwt')) {
                    e.preventDefault();
                    $state.go('home');
                }
            }
        });
    }
}());
