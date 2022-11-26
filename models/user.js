const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const AuthorizationError = require('../errors/AuthorizationError');
const {
  LOGIN_ERROR_MESSAGE,
  ENTER_EMAIL, EMAIL_REQUIRED,
  EXIST_EMAIL_MESSAGE,
  PASSWORD_REQUIRED,
  NAME_REQUIRED,
  MIN_LENGTH,
  MAX_LENGTH,
} = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, EMAIL_REQUIRED],
    unique: [true, EXIST_EMAIL_MESSAGE],
    validate: {
      validator: (email) => validator.isEmail(email),
      message: ENTER_EMAIL,
    },
  },
  password: {
    type: String,
    required: [true, PASSWORD_REQUIRED],
    select: false,
  },
  name: {
    type: String,
    required: [true, NAME_REQUIRED],
    minlength: [2, MIN_LENGTH],
    maxlength: [30, MAX_LENGTH],
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthorizationError(LOGIN_ERROR_MESSAGE));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthorizationError(LOGIN_ERROR_MESSAGE));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
