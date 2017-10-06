var middlewareObject    = {},
    Post                = require('../models/post');

// middlewares are used for authenticating the user on certain conditions.
//USE "res.json({ error: '{error code number}' });" to return a number as json for angular side error

//When user is not logged in
middlewareObject.isLoggedIn = (req, res, next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    res.json({ error: '441' });
}


//checking if User is the owner of the Post 
middlewareObject.checkPostOwnersip = (req,res,next)=>{
    if(req.isAuthenticated()){
        Post.findById(req.params.id,(err,foundPost)=>{
            if(err){
                res.json({ error: '404' })
            } else {
                if(foundPost.author.id.equals(req.user._id)){
                    next();
                }
            }
        })
    }
}

module.exports = middlewareObject;