app.controller('indexController', ['$Scope', '$http', '$rootScope', 'globalFunction', function($scope, $http, $rootScope, globalFunctions) {

    $scope.allPost = () => {
        // SHOW ALL POSTS
        $http.get('/post/allPosts').then((response) => {
            $scope.data = response.data.Posts;
        }).catch((err) => {
            console.log(err)
        })
    }

    $scope.viewPost = (id) => {
        $http.get('/post/viewPost/' + id).then((response) => {
            $scope.postData = response.data.Post;
            // check ownership condition
            if (response.data.currentUser._id == response.data.Post.author.id) {
                $scope.managePost = true;
            } else {
                $scope.managePost = false;
            }

            $('.viewPost.ui.modal')
                .modal({ blurring: true })
                .modal('show');
        }).catch((err) => {
            console.log(err);
        })
    };

    $scope.deletePost = (id) => {
        $http.delete('/post/' + id).then((response) => {
            var data = response.data;
            if (data.error == 441) {
                $scope.errorResponse(data)
            }
            $('.viewPost.ui.modal')
                .modal({ blurring: true })
                .modal('hide', () => {
                    $scope.postData = ''
                })
            $scope.allPost();
            alert(data.Post);
        }).catch((err) => {
            console.log(err);
        })
    }

    $scope.editPost = (id) => {
        $http.get('/post/viewPost/' + id).then((response) => {
            var data = response.data;
            $scope.edit = {
                Title: data.Post.name,
                Content: data.Post.description
            }
            $('.editPost.ui.modal')
                .modal({ blurring: true })
                .modal('show');
        }).catch((err) => {
            console.log(err);
        });
    };

    $scope.updatePost = (id) => {
        $http.post('/post/updatePost/' + id, $scope.edit).then((response) => {
            var data = response.data;
            if (data.error == 441) {
                $.parseJSON(data)
                eval(data.runFunc());
                alert(data.message);
                data.runFunc();
            } else {
                $scope.title = '';
                $scope.content = '';
                $scope.allPost();
                $scope.closePost();
                $scope.toggleSideBar();
                $state.go('#!/option');
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    //ON LOAD CONTROLLER
    $scope.allPost();

    //SHARING THE FUNCTION TO OTHER CONTROLLERS//
    $rootScope.$on('indexController.allPost', () => {
        $scope.allPost();
    });
    //========================================//
}])