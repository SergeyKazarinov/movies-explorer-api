const mongoose = require('mongoose');
const validator = require('validator');
const {
  INVALID_LINK,
  COUNTRY_REQUIRED,
  DIRECTOR_REQUIRED,
  DURATION_REQUIRED,
  YEAR_REQUIRED,
  DESCRIPTION_REQUIRED,
  IMAGE_REQUIRED,
  TRAILER_LINK_REQUIRED,
  THUMBNAIL_REQUIRED,
  OWNER_REQUIRED,
  MOVIE_ID_REQUIRED,
  NAME_RU_REQUIRED,
  NAME_EN_REQUIRED,
} = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, COUNTRY_REQUIRED],
  },
  director: {
    type: String,
    required: [true, DIRECTOR_REQUIRED],
  },
  duration: {
    type: Number,
    required: [true, DURATION_REQUIRED],
  },
  year: {
    type: String,
    required: [true, YEAR_REQUIRED],
  },
  description: {
    type: String,
    required: [true, DESCRIPTION_REQUIRED],
  },
  image: {
    type: String,
    required: [true, IMAGE_REQUIRED],
    validate: {
      validator: (url) => validator.isURL(url, { require_protocol: true }),
      message: INVALID_LINK,
    },
  },
  trailerLink: {
    type: String,
    required: [true, TRAILER_LINK_REQUIRED],
    validate: {
      validator: (url) => validator.isURL(url, { require_protocol: true }),
      message: INVALID_LINK,
    },
  },
  thumbnail: {
    type: String,
    required: [true, THUMBNAIL_REQUIRED],
    validate: {
      validator: (url) => validator.isURL(url, { require_protocol: true }),
      message: INVALID_LINK,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, OWNER_REQUIRED],
  },
  movieId: {
    type: Number,
    required: [true, MOVIE_ID_REQUIRED],
  },
  nameRU: {
    type: String,
    required: [true, NAME_RU_REQUIRED],
  },
  nameEN: {
    type: String,
    required: [true, NAME_EN_REQUIRED],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
