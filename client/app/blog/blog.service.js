(function() {
    'use strict';

    angular
        .module('app')
        .factory('blogService', blogService);

    blogService.$inject = ['$http']

    function blogService($http) {
        var service = {
            getBlogPosts: getBlogPosts,
            getBlogPostById: getBlogPostById,
            createPost: createPost
        };

        return service;

        function getBlogPosts() {
            return $http.get('/blog')
                .then(getBlogPostsComplete, getBlogPostsFail)

            function getBlogPostsComplete(response) {
                return response.data;
            }

            function getBlogPostsFail(err) {
                return err;
            }
        }

        function getBlogPostById(id) {
            return $http.get('/blog/' + id)
                .then(getBlogPostByIdComplete, getBlogPostByIdFail)

            function getBlogPostByIdComplete(response) {
                return response.data;
            }

            function getBlogPostByIdFail(err) {
                return err;
            }
        }

        function createPost(post) {
            return $http.post('/create', {
                post: post
            }).then(createPostComplete, createPostFail);

            function createPostComplete(response) {
                return response.data;
            }

            function createPostFail(err) {
                return err;
            }
        }
    }
}());
