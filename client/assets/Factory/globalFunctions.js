//THIS IS WHERE ALL THE GLOBAL FUNCTIONS OF THE CLIENT SIDE

app.factory('globalFunctions', function() {
    return {
        allPost: ($scope, $http) => {
            // SHOW ALL POSTS
            $http.get('/post/allPosts').then((response) => {
                $scope.data = response.data.Posts;
            }).catch((err) => {
                console.log(err)
            })
        }
        ,
        errorResponse: (data) => {
            //error response for every requests fails
            data.runFunc = eval(data.runFunc);
            alert(data.message);
            data.runFunc();
        },
        closePost: () => {
            $('.newPost.ui.modal')
                .modal('hide');
        },
        toggleSideBar: () =>{
            $('.ui.sidebar')
                .sidebar('setting', 'transition', 'overlay')
                .sidebar('toggle');
        }
    }
})