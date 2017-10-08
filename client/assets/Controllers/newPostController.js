app.controller('newPost', function ($scope, $http, $rootScope, globalFunctions) {
    var newPost = new Object();

    //allPost FROM indexController
    $scope.allPost = () => {
        $rootScope.$emit('indexController.allPost', {});
    };

    $scope.newPost = () => {
        newPost.name = $scope.title;
        newPost.description = $scope.content;
        $http.post('/post/newPost', newPost).then((response) => {
            if (response.data.error == 441) {
                globalFunctions.errorResponse();
            } else {
                $scope.title = '';
                $scope.content = '';
                $scope.allPost();
                globalFunctions.closePost();
                globalFunctions.toggleSideBar();
            }
        }).catch((err) => {
            console.log(err)
        })
    }
});