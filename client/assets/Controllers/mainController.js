app.controller('mainController', function ($scope, $http, $rootScope) {

    //SHARING THE FUNCTION TO OTHER CONTROLLERS//
    $rootScope.$on('mainController.allPost', () => {
        $scope.allPost();
    })
    //========================================//

    $scope.allPost = () => {
        // SHOW ALL POSTS
        $http.get('/post/allPosts').then((response) => {
            $scope.data = response.data.Posts;
        }).catch((err) => {
            console.log(err)
        })
    }
    $scope.createPost = () => {
        $('.newPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };

    //ON LOAD CONTROLLER
    window.onload = () => {
        $scope.allPost();
    }
});