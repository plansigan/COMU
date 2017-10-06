var express = require('express'),
    router = express.Router({mergeParams: true}),
    Post = require('./../models/post.js'),
    middleware = require('../middleware');

//MAIN PAGE POSTS
router.get('/allPosts', (req, res) => {
    Post.find((err, Posts) => {
        if (err) {
            console.log(err)
        } else {
            res.json({
                Posts
            })
        }
    })
})

// NEW POST JSON
router.post('/newPost',middleware.isLoggedIn,(req, res) => {
    var newPost = req.body
    newPost.author = {
        username: req.user.username,
        id: req.user._id
    }
    //start post with not edited
    newPost.edited = false;

    Post.create(newPost, (err, newlyCreatedPost) => {
        if (err) {
            console.log(err)
        } else {
            console.log(newlyCreatedPost);
            res.redirect('/comu#!/index')
        }
    });
});

// VIEW POST JSON
router.get('/viewPost/:id',(req, res) => {
    Post.findById(req.params.id, (err, Post) => {
        console.log(Post);
        res.json({Post,currentUser:req.user})
    });
});

//UPDATE POST
router.post('/updatePost/:id',(req,res)=>{
    var editedPost = req.body
    Post.findById(req.params.id,(err,updatedPost)=>{
        if(err){
            console.log(err)
        }
        

        console.log(editedPost)
    })
})

//DESTROY POST
router.delete('/:id', middleware.checkPostOwnersip,(req,res)=>{
    var Postname;
    Post.findById(req.params.id, (err, Post)=>{
        if(err){
            console.log(err)
        } else {
            Postname = Post.name;
        }
    })
    Post.findByIdAndRemove(req.params.id,(err)=>{
        if(err){
            res.redirect('back');
        } else {
            res.json({
                Post: `Successfully deleted ${Postname}`
            })
        }
    })
})
module.exports = router;

function newFunction(Post) {
    console.log(Post);
}