
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  nome: String,
  idade: String,
  user: String,
  senha: String
});

var User = mongoose.model('user', userSchema);

module.exports = User;
