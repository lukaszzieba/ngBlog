(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$scope', '$sce', 'blogService'];

    function AdminController($scope, $sce, blogService) {

        $scope.create = function(post) {
            console.log(post.content);
            blogService.createPost(post)
                .then(function(response) {

                });
        };

        //CKEDITOR.replace('content');     
        $('#submitButton').click(function(e) {
            $scope.$apply(function() {
                var editorData = CKEDITOR.instances.content.getData();
                console.log(editorData);
            });
        });

        activate();

        function activate() {

        }
    }
}());
