(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['$sce', 'blogService', 'toastr']

    function EditorController($sce, blogService, toastr) {
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
                    toastr.success('Post create success.', 'Success');
                    vm.post.title = '';
                    vm.post.preview = '';
                    CKEDITOR.instances.content.setData('');
                }, function(error) {
                    toastr.error('Cost create failed.', 'Error');
                });
        });


        activate();

        function activate() {

        }
    }
}());
