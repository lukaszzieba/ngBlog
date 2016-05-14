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

        CKEDITOR.replace('content');
        CKEDITOR.stylesSet.add('my_styles', [
            // Block-level styles.
            {
                name: 'Blue Title',
                element: 'h2',
                styles: {
                    color: 'Blue'
                }
            }, {
                name: 'Red Title',
                element: 'h3',
                styles: {
                    color: 'Red'
                }
            },

            // Inline styles.
            {
                name: 'CSS Style',
                element: 'span',
                attributes: {
                    'class': 'my_style'
                }
            }, {
                name: 'Marker: Yellow',
                element: 'span',
                styles: {
                    'background-color': 'Yellow'
                }
            }
        ]);
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
