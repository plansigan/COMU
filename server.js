//NPM PACKAGES
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    flash           = require("connect-flash"),
    Localstrategy   = require("passport-local").Strategy,
    methodOverride  = require("method-override"),
    User            = require("./server/models/user");

let port = process.env.PORT || 3000;

//ROUTES
var AuthRoute = require('./server/routes/index');

//MONGOOSE CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Comu')

//USE DEFAULT
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs')
app.use(methodOverride('_method'));
app.use(flash());

//USE FOLDER DIRECTORIES
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

//PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret:'Welcome to Comu!',
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//FLASH CONFIGURATION (this flash is mainly use for for strict authentication,Register and login. If you want to use flash other than this use angular-flash)
app.use((req,res,next)=>{
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

//USE ROUTES
app.use('/',AuthRoute);

app.listen(port,()=>{
  console.log(`connected to ${port}`)
});
