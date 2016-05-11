(function() {
    'use strict';

    angular
        .module('app')
        .factory('blogService', blogService);

    blogService.$inject = ['$http']

    function blogService($http) {
        var service = {
            getBlogPosts: getBlogPosts,
            getBlogPostById: getBlogPostById
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

        function getBlogPostById(id) {
            return $http.get('./data.json')
                .then(getBlogPostByIdComplete, getBlogPostByIdFail)

            function getBlogPostByIdComplete(response) {
                return response.data[id];
            }

            function getBlogPostByIdFail(response) {
                return response;
            }
        }
    }
}());
