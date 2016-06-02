(function() {
    'use strict';

    angular
        .module('app')
        .component('blog', {
            templateUrl: './app/blog/blog.html',
            controller: 'BlogController'
        });
}());
