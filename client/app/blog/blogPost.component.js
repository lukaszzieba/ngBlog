(function() {
    'use strict';

    angular
        .module('app')
        .component('blogPost', {
            bindings: {
                post: '='
            },
             templateUrl: './app/blog/blog-post.html',
            // template: '<div>Test: {{$ctrl.post.author.name}}</div>',
            controller: function() {              
              console.log(this.post);
            }
        });
}());
