var mongoose = require('mongoose');

var postSchema = new  mongoose.Schema({
  name:String,
  description:String,
  description:String,
  created:{
    type:Date, default:Date.now
  },
  author:{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  },
  comments:[
    {
      type:mongoose.Schema.Types.objectId,
      ref:'Comment'
    }
  ]
});

module.exports = mongoose.model('Post',postSchema);
