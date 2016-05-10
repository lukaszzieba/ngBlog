(function() {
    'use strict';

    angular
        .module('app')
        .factory('blogService', blogService);

    blogService.$inject = ['$q', '$http']

    function blogService($q, $http) {
        var service = {
            getBlogPosts: getBlogPosts
        };

        return service;

        function getBlogPosts() {
            return $http.get('./data.json')
                .then(getBlogPostsComplete, getBlogPostsFail)

            function getBlogPostsComplete(response) {
                return response.data;
            }

            function getBlogPostsFail(response) {
                return response;
            }
        }
    }
}());
