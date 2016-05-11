(function() {
    'use strict';

    angular
        .module('app')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['blogService', '$log', '$routeParams'];

    function BlogController(blogService, $log, $routeParams) {
        var vm = this,
            id = $routeParams.id;
        vm.blogPosts = [];
        vm.blogPost;

        activate();

        function activate() {
            if (!id) {
                return getBlogPosts().then(function() {
                    $log.info("Blog view active!")
                });
            } else {
                return getBlogPostById().then(function() {
                    $log.info("Blog deatails view active Id: " + id);
                });
            }
        }

        function getBlogPosts() {
            return blogService.getBlogPosts()
                .then(function(data) {
                    vm.blogPosts = data;
                    return vm.blogPosts;
                });
        }

        function getBlogPostById() {
            return blogService.getBlogPostById(id)
                .then(function(data) {
                    vm.blogPost = data;
                });
        }

    }
}());
