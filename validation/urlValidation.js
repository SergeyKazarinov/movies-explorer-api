const validator = require('validator');
const IncorrectData = require('../errors/IncorrectData');
const { INVALID_LINK } = require('../utils/constants');

const validationURL = (value) => {
  if (!validator.isURL(value)) {
    throw new IncorrectData(INVALID_LINK);
  } else {
    return value;
  }
};

module.exports = validationURL;
