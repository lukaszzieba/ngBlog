(function() {
    'use strict';

    angular
        .module('account.module', [
          'angular-storage',
          'angular-jwt'
        ]);
}());

(function() {
    'use strict';

    angular
        .module('admin.module', ['ngSanitize']);
}());

(function() {
    'use strict';

    angular.module('app', [
        // vendor
        'ui.router',

        // my
        'account.module',
        'admin.module'

    ]);
}());

(function() {
    'use strict';

    angular
        .module('account.module')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$httpProvider', 'jwtInterceptorProvider'];

    function config($stateProvider, $httpProvider, jwtInterceptorProvider) {

        $stateProvider
            .state('login', {
                url: "/login",
                template: '<login></login>',
                // component: 'login'
            })
            .state('register', {
                url: '/register',
                template: '<register></register>',
                // component: 'register'

            });

        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('jwt');
        }
        $httpProvider.interceptors.push('jwtInterceptor');
    }

    run.$inject = ['$rootScope', 'store', '$state']

    function run($rootScope, store, $state) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.requiresLogin) {
                if (!store.get('jwt')) {
                    e.preventDefault();
                    $state.go('home');
                }
            }
        });
    }
}());

(function() {
    'use strict';

    angular
        .module('admin.module')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('admin', {
                url: "/admin",
                template: '<admin></admin>',
                data: {
                    requiresLogin: true
                }
            })
            .state('admin.dashboard', {
                url: "/dashboard",
                template: '<dashboard></dashboard>',
                data: {
                    requiresLogin: true
                }
            })
            .state('admin.editor', {
                url: "/editor",
                template: '<editor></editor>',
                data: {
                    requiresLogin: true
                }
            });
    }
}());

(function() {
    'use strict';

    angular
        .module('app')
        .config(config)
        .run(run);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: './app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('blog', {
                url: "/blog",
                templateUrl: "./app/blog/blog.html",
                controller: 'BlogController',
                controllerAs: 'vm'
            })
            .state('blogDeyails', {
                url: "/blog/:id",
                templateUrl: './app/blog/blog-post-details.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            });
    }
    run.$inject = ['$state'];

    function run($state) {

    }
}());

(function() {
    'use strict';

    angular
        .module('account.module')
        .component('login', {
            bindings: {},
            templateUrl: './app/account/login/login.html',
            controller: 'LoginController'
        });
}());

(function() {
    'use strict';

    angular
        .module('account.module')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$http', 'store', '$state']

    function LoginController($http, store, $state) {
        var vm = this;

        vm.login = function(user) {
            $http({
                url: '/login',
                method: 'POST',
                data: user
            }).then(function(response) {
                store.set('jwt', response.data.id_token);
                $state.go('home');
            }, function(err) {
                console.log(err.data);
            });
        }

        activate();

        function activate() {

        }
    }
}());

(function() {
    'use strict';

    angular
        .module('account.module')
        .component('register', {
            bindings: {},
            templateUrl: './app/account/register/register.html',
            controller: 'RegisterController'
        });
}());

(function() {
    'use strict';

    angular
        .module('account.module')
        .controller('RegisterController', RegisterController);
    RegisterController.$inject = ['$http', 'store', '$state']

    function RegisterController($http, store, $state) {
        var vm = this;

        vm.register = function(user) {
            $http({
                url: '/register',
                method: 'POST',
                data: user
            }).then(function(response) {
                store.set('jwt', response.data.id_token);
                $state.go('home')
            }, function(err) {
                console.log(err.data);
            });
        }

        activate();

        function activate() {

        }
    }
}());

(function() {
    'use strict';

    angular
        .module('admin.module')
        .component('admin', {
            bindings: {},
            templateUrl: './app/admin/admin.html',
            controller: 'AdminController'
        });
}());

(function() {
    'use strict';

    angular
        .module('admin.module')
        .controller('AdminController', AdminController);

    AdminController.$inject = [];

    function AdminController() {
        var vm = this;
        
        activate();

        function activate() {

        }
    }
}());

(function() {
    'use strict';

    angular
        .module('admin.module')
        .component('dashboard', {
            bindings: {},
            templateUrl: './app/admin/dashboard/dashboard.html'
        });
}());

(function() {
    'use strict';

    angular
        .module('admin.module')
        .component('editor', {
            bindings: {},
            templateUrl: './app/admin/editor/editor.html',
            controller: 'EditorController'       
        });
}());

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

(function() {
    'use strict';

    angular
        .module('app')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['blogService', '$log', '$stateParams'];

    function BlogController(blogService, $log, $stateParams) {
        var vm = this,
            id = $stateParams.id;
        vm.blogPosts = [];
        vm.blogPost;

        activate();

        function activate() {
            if (!id) {
                return getBlogPosts().then(function() {
                    $log.info("Blog view active!");
                });
            } else {
                return getBlogPostById().then(function() {
                    $log.info("Blog deatails view active Id: " + id);
                });
            }
        }

        function getBlogPosts() {
            return blogService.getBlogPosts()
                .then(function(data) {
                    vm.blogPosts = data;
                    return vm.blogPosts;
                });
        }

        function getBlogPostById() {
            return blogService.getBlogPostById(id)
                .then(function(data) {
                    vm.blogPost = data;
                });
        }

    }
}());

(function() {
    'use strict';

    angular
        .module('app')
        .factory('blogService', blogService);

    blogService.$inject = ['$http']

    function blogService($http) {
        var service = {
            getBlogPosts: getBlogPosts,
            getBlogPostById: getBlogPostById,
            createPost: createPost
        };

        return service;

        function getBlogPosts() {
            return $http.get('/blog')
                .then(getBlogPostsComplete, getBlogPostsFail)

            function getBlogPostsComplete(response) {
                return response.data;
            }

            function getBlogPostsFail(err) {
                return err;
            }
        }

        function getBlogPostById(id) {
            return $http.get('/blog/' + id)
                .then(getBlogPostByIdComplete, getBlogPostByIdFail)

            function getBlogPostByIdComplete(response) {
                return response.data;
            }

            function getBlogPostByIdFail(err) {
                return err;
            }
        }

        function createPost(post) {
            return $http.post('/create', {
                post: post
            }).then(createPostComplete, createPostFail);

            function createPostComplete(response) {
                return response.data;
            }

            function createPostFail(err) {
                return err;
            }
        }
    }
}());

(function() {
    'use strict';

    angular
        .module('app')
        .component('blogPost', {
            bindings: {
                post: '='
            },
             templateUrl: './app/blog/blog-post.html'
            // template: '<div>Test: {{$ctrl.post.author.name}}</div>',
        });
}());

(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
        var vm = this;
        vm.name = "Łuaksz";

        // API tests
        vm.publicApi = function() {
            $http({
                url: '/api/public',
                method: 'GET'
            }).then(function(responese) {
                console.log(responese.data);
                vm.publicApiResponse = responese.data;
            }, function(err) {
                vm.publicApiResponse = err.data;
            })
        }

        vm.protecteApi = function() {
            $http({
                url: '/api/protected',
                method: 'GET'
            }).then(function(responese) {
                console.log(responese.data);
                vm.protectedApiResponse = responese.data;
            }, function(err) {

                vm.protectedApiResponse = err.statusText + ' ' + err.status;
            })
        }

        // ---------
        activate();

        ////////////////

        function activate() {}
    }
}());

(function() {
'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = [];
    function ShellController() {
        var vm = this;
        vm.test = 'Łuaksz';

        activate();

        ////////////////

        function activate() {

        }

    }
}());
