var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  titulo: String,
  content: String,
  tags: []
});

var Post = mongoose.model('posts', postSchema);

module.exports = Post;
