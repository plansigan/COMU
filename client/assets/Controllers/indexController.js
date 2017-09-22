app.controller('indexController', function($scope, $http, $rootScope) {

    //SHARING THE FUNCTION TO OTHER CONTROLLERS//
    $rootScope.$on('indexController.allPost', () => {
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

    $scope.viewPost = (id) => {
        $('.viewPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };

    //ON LOAD CONTROLLER
    $scope.allPost();
})