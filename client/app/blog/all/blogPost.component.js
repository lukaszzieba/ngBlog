(function() {
    'use strict';

    angular
        .module('app')
        .component('blogPost', {
            bindings: {
                post: '='
            },
            templateUrl: './app/blog/all/blog-post.html'
        });
}());
