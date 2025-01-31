const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    {
    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    collection: 'users',
  }
);

userSchema.plugin(uniqueValidator, { message: 'Email already in use!' });
module.exports = mongoose.model('User', userSchema);
