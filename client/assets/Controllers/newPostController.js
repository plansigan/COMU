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
<<<<<<< HEAD
                globalFunctions.errorResponse();
=======
                alert('You are not logged in');
                window.location = '/login'
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
            } else {
                $scope.title = '';
                $scope.content = '';
                $scope.allPost();
<<<<<<< HEAD
                globalFunctions.closePost();
                globalFunctions.toggleSideBar();
=======
                $scope.closePost();
                $scope.toggleSideBar();
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
            }
        }).catch((err) => {
            console.log(err)
        })
    }
});