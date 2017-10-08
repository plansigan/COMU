app.controller('mainController', function ($scope, $http, $rootScope, globalFunctions) {

    $scope.toggleSideBar = () => {
        globalFunctions.toggleSideBar();
    }
    $scope.createPost = () => {
        $('.newPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };

    $scope.closePost = () => {
        globalFunctions.closePost();
    }

    //indexController allPost
    $scope.allPost = () => {
        globalFunctions.allPost();
    }

});