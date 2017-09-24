app.controller('newPost', function($scope, $http, $rootScope) {
    var newPost = new Object();

    //allPost FROM indexController
    $scope.allPost = () => {
        $rootScope.$emit('indexController.allPost', {});
    };
    //closePost FROM mainController
    $scope.closePost = () => {
        $rootScope.$emit('mainController.closePost', {});
    };
    //toggleSideBar FROM mainController
    $scope.toggleSideBar = () => {
        $rootScope.$emit('mainController.toggleSideBar', {});
    };

    $scope.newPost = () => {
        newPost.name = $scope.title;
        newPost.description = $scope.content;
        $http.post('/post/newPost', newPost).then((response) => {
            $scope.title = '';
            $scope.content = '';
            $scope.allPost();
            $scope.closePost();
            $scope.toggleSideBar();
            $state.go('#!/option');
        }).catch((err) => {
            console.log(err)
        })
    }
});