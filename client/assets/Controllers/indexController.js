<<<<<<< HEAD
app.controller('indexController', ['$scope', '$http', '$rootScope', 'globalFunctions', function($scope, $http, $rootScope, globalFunctions) {

=======
app.controller('indexController', ['$Scope', '$http', '$rootScope', 'globalFunction', function($scope, $http, $rootScope, globalFunctions) {

    $scope.allPost = () => {
        // SHOW ALL POSTS
        $http.get('/post/allPosts').then((response) => {
            $scope.data = response.data.Posts;
        }).catch((err) => {
            console.log(err)
        })
    }

>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
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
<<<<<<< HEAD
                globalFunctions.errorResponse(data)
=======
                $scope.errorResponse(data)
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
            }
            $('.viewPost.ui.modal')
                .modal({ blurring: true })
                .modal('hide', () => {
                    $scope.postData = ''
                })
<<<<<<< HEAD
            globalFunctions.allPost($scope, $http);
=======
            $scope.allPost();
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
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
<<<<<<< HEAD
                globalFunctions.errorResponse(data)
=======
                $.parseJSON(data)
                eval(data.runFunc());
                alert(data.message);
                data.runFunc();
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
            } else {
                $scope.title = '';
                $scope.content = '';
                globalFunctions.allPost($scope, $http);
                $scope.toggleSideBar();
                $state.go('#!/option');
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    //ON LOAD CONTROLLER
    globalFunctions.allPost($scope, $http);
    
    //passing allpost For Index to other modules
    $scope.allPost = ()=>{
        globalFunctions.allPost($scope, $http);
    }
    $rootScope.$on('indexController.allPost', () => {
        $scope.allPost();
    });
<<<<<<< HEAD
=======
    //========================================//
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
}])