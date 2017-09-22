app.controller('mainController', function($scope, $http, $rootScope) {
    $scope.createPost = () => {
        $('.newPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };

    //indexController allPost
    $scope.allPost = () => {
        $rootScope.$emit('indexController.allPost', {});
    }
});