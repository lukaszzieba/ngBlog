(function() {
    'use strict';

    angular
        .module('app')
        .component('blogPostDetails', {
            templateUrl: './app/blog/single/blog-post-details.html',
            controller: 'BlogController'
        });
}());
