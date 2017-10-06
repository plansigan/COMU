app.controller('indexController', function ($scope, $http, $rootScope) {

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
            if (response.data.currentUser._id == response.data.Post.author.id){
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

    $scope.deletePost = (id)=>{
        $http.delete('/post/'+ id).then((response)=>{
            $scope.allPost();
            alert(response.data.Post);
            $('.viewPost.ui.modal')
                .modal({blurring: true})
                .modal('hide',()=>{
                    $scope.postData = ''
                })
        }).catch((err)=>{
            console.log(err);
        })
    }

    $scope.editPost = (id) => {
        $http.get('/post/viewPost/' + id).then((response) => {
            $scope.edit = {
                Title:response.data.Post.name,
                Content: response.data.Post.description
            }
            $('.editPost.ui.modal')
                .modal({ blurring: true })
                .modal('show');
        }).catch((err) => {
            console.log(err);
        });
    };

    $scope.updatePost = (id) => {
        $http.post('/post/updatePost/'+id,$scope.edit).then((response) => {
            if (response.data.error == 441) {
                alert('You are not logged in');
                window.location = '/login'
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
})