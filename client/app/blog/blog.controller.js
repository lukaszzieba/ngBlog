(function() {
    'use strict';

    angular
        .module('app')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['blogService', '$log'];

    function BlogController(blogService, $log) {
        var vm = this;
        vm.blogPosts = [];

        activate();

        function activate() {
            return getBlogPosts().then(function() {
                $log.info("Blog view active!")
            });
        }

        function getBlogPosts() {
            return blogService.getBlogPosts()
                .then(function(data) {
                    vm.blogPosts = data;
                    return vm.blogPosts;
                });
        }

    }
}());
