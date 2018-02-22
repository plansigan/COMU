var mongoose              = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'),
    uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username:String,
  ethaddress:{
    type: String,
    required:true,
    unique:true
  },
  password:String,
  email:String,
  gender:String,
  age:Number
});

UserSchema.plugin(passportLocalMongoose)
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',UserSchema);
