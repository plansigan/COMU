app.controller('mainController', function($scope, $http, $rootScope) {

    $scope.toggleSideBar = () => {
        $('.ui.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    }
    $scope.createPost = () => {
        $('.newPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };

    $scope.closePost = () => {
        $('.newPost.ui.modal')
            .modal('hide');
    }

    //indexController allPost
    $scope.allPost = () => {
        $rootScope.$emit('indexController.allPost', {});
    }


    //SHARING THE FUNCTION TO OTHER CONTROLLERS//
    $rootScope.$on('mainController.closePost', () => {
        $scope.closePost();
    });
    $rootScope.$on('mainController.toggleSideBar', () => {
        $scope.toggleSideBar();
    });
    //========================================//
});