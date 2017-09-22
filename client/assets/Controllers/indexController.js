app.controller('indexController', function ($scope) {
    $scope.viewPost = (id) => {
        $('.viewPost.ui.modal')
            .modal({ blurring: true })
            .modal('show');
    };
})