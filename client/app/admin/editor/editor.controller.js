(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$sce', 'blogService']

    function EditorController($sce, blogService) {
        var vm = this;
        vm.post = {};
        CKEDITOR.replace('content');

        $('#submitButton').click(function(e) {
            var editorData = CKEDITOR.instances.content.getData();

            var postToCreate = {};
            postToCreate.title = vm.post.title;
            postToCreate.preview = vm.post.preview;
            postToCreate.content = editorData;

            blogService.createPost(postToCreate)
                .then(function(response) {

                });
        });


        activate();

        function activate() {

        }
    }
}());
