app.controller('newPost', function ($scope, $http, $rootScope) {
    var newPost = new Object();

    //allPost FROM MAINCONTROLLER
    $scope.allPost = () => {
        $rootScope.$emit('mainController.allPost', {});
    }
    $scope.newPost = () => {
        newPost.name = $scope.title;
        newPost.description = $scope.content;
        $http.post('/post/newPost', newPost).then((response) => {
            $scope.title = '';
            $scope.content = '';
            $scope.allPost();
        }).catch((err) => {
            console.log(err)
        })
    }
});