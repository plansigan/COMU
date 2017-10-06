var mongoose      = require('mongoose'),
    autopopulate  = require('mongoose-autopopulate');

var postSchema = new mongoose.Schema({
  name:String,
  description:String,
  created:{
    type:Date, default:Date.now
  },
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'user'
    },
    username:String
  },
  edited:Boolean
});
postSchema.plugin(autopopulate)
module.exports = mongoose.model('Post',postSchema);
