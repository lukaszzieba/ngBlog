(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$sce', 'blogService']

    function EditorController($sce, blogService) {
        var vm = this;

        // vm.create = function(post) {
        //     console.log(post.content);
        //     blogService.createPost(post)
        //         .then(function(response) {
        //
        //         });
        // };

        CKEDITOR.replace('content');
        $('#submitButton').click(function(e) {
            var editorData = CKEDITOR.instances.content.getData();
            console.log(editorData);
        });

        activate();

        function activate() {

        }
    }
}());
