var express = require('express')
      ,mongoose = require('mongoose')
      ,app  = express();

var Post = require('./Models/post');
var User = require('./Models/user');

app.set('views', __dirname+'views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use('/posts', express.static(__dirname + '/public/posts.html'));
mongoose.connect('mongodb://localhost:27017/mean');

app.get('/', function(req,res){
  res.send("Ola mundo");
});

app.get('/posts-data', function(req,res){
  Post.find(function(err, posts){
    res.send(posts);
  });
});

app.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err,post){
    res.send(post);
  })
});

app.get('/user', function(req,res){
  User.find(function(err, user){
    res.send(user);
  });
});

app.listen(8080, function(){
  console.log('Server Running at localhost:8080');
});
