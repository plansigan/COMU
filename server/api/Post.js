var express = require('express'),
    router  = express.Router(),
    Post    = require('./../models/post.js')

//MAIN PAGE POSTS
router.get('/allPosts',(req,res)=>{
  Post.find((err,Posts)=>{
    if(err){
      console.log(err)
    } else {
      res.json({Posts})
    }
  })
})


// NEW POST JSON
router.post('/newPost',(req,res)=>{
  var newPost = req.body
  newPost.author = {
    username:req.user.username,
    id:req.user._id
  }
  Post.create(newPost,(err,newlyCreatedPost)=>{
    if(err){
      console.log(err)
    } else {
      console.log(newlyCreatedPost);
      res.redirect('/comu#!/index')
    }
  });
});

// VIEW POST JSON
router.get('/')

//DESTROY POST
// router.delete('/:',(req,res)=>{
//   Post.findByIdAndRemove()
// })

module.exports = router;
