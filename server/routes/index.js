//NPM PACKAGES
var express         = require("express"),
    router          = express.Router(),
    passport        = require('passport'),
    User            = require('../models/user')


router.get('/',(req,res)=>{
  res.render('landingPage')
})

router.get('/comu',(req,res)=>{
  res.render('index',{currentUser:req.user});
})

//AUTHENTICATION ROUTES

//register form
router.get('/register',(req,res)=>{
  res.render('register')
});

//signup logic
router.post('/register',(req,res)=>{

  var newAcc  = new User({
                  username:req.body.account.username,
                  email:req.body.account.email,
                  age:req.body.account.age,
                  gender:req.body.account.gender,
                }),
      newPass = req.body.account.password

  User.register(newAcc,newPass,(err,user)=>{
    if(err){
      console.log(err.message)
      req.flash('error',err.message);
      res.redirect('/register')
    } else {
      newAcc.save()
      req.flash('success',`Welcome to Comu ${req.body.account.username}!`)
      req.login(user,(err)=>{
        if(err){
          return next(err);
        }
        return res.redirect('/comu#!/index')
      })
    }
  });
});

//login form
router.get('/login',(req,res)=>{
  res.render('login');
})

//login logic
router.post('/login',passport.authenticate('local',
  {
    successRedirect:'/comu#!/index',
    successFlash:'Welcome to Comu!',
    failureRedirect:'/login',
    failureFlash:'You have entered an unregistered user'
  }),(req,res)=>{
    console.log('hello')
  })

//logout logic
router.get('/logout',(req,res)=>{
  req.logout();
  req.flash('success',"Logged you out!");
  res.redirect('/login')
})




module.exports = router;
