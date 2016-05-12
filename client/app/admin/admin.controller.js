(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$scope', '$sce', 'blogService'];

    function AdminController($scope, $sce, blogService) {
        var vm = this;
        // vm.post = {};
        // vm.post.content = '';
        // vm.htmlOutput = '';

        vm.create = function(post) {
            blogService.createPost(post)
                .then(function(response) {

                });
        };

        // $scope.$watch('vm.post.content', function(oldVal, newVal) {
        //   console.log(newVal);
        //     vm.htmlOutput = $sce.trustAsHtml(newVal);
        // });

        activate();

        function activate() {

        }
    }
}());
