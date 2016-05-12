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
            return $http.get('/blog')
                .then(getBlogPostsComplete, getBlogPostsFail)

            function getBlogPostsComplete(response) {
                return response.data;
            }

            function getBlogPostsFail(response) {
                return response;
            }
        }

        function getBlogPostById(id) {
            return $http.get('/blog/'+ id)
                .then(getBlogPostByIdComplete, getBlogPostByIdFail)

            function getBlogPostByIdComplete(response) {
                return response.data;
            }

            function getBlogPostByIdFail(response) {
                return response;
            }
        }
    }
}());
