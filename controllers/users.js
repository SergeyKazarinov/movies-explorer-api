const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/user');

const { NODE_ENV, JWT_SECRET_KEY } = process.env;

module.exports.signIn = (req, res) => {
  const { email, password } = req.body;
  Users.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET_KEY : 'dev-secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.signUp = (req, res) => {
  const {
    email, name, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => Users.create({
      email, name, password: hash,
    }))
    .then((user) => res.status(201).send({
      email, name, password, _id: user._id,
    }))
    .catch((err) => {
      res.send(err);
    });
};

module.exports.getUser = (req, res) => {
  const userId = req.user._id;
  Users.findById(userId)
    .then((user) => res.send(user))
    .catch((err) => {
      res.send(`error ${err}`);
    });
};

module.exports.patchUser = (req, res) => {
  const userId = req.user._id;
  const { email, name } = req.body;
  Users.findByIdAndUpdate(
    userId,
    { email, name },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(`error ${err}`);
    });
};
