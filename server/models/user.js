var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String},
  surname: { type: String},
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  admin: Boolean,
  created_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
