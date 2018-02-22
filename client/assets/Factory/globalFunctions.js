//THIS IS WHERE ALL THE GLOBAL FUNCTIONS OF THE CLIENT SIDE

app.factory('globalFunctions', function() {
    return {
<<<<<<< HEAD
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
=======
        errorResponse: (data) => {
            data.runFunc = eval(data.runFunc);
            alert(data.message);
            data.runFunc();
>>>>>>> 58f6cb33e31ed20813b60bdd7e5e0d35ce53084e
        }
    }
})