const Movies = require('../models/movie');

module.exports.getMovies = (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  Movies.find({ owner: userId })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.createMovie = (req, res) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;
  Movies.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink: trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => res.send(err));
};

module.exports.deleteMovie = (req, res) => {
  Movies.findById(req.params.movieId)
    .then((movie) => {
      const user = String(req.user._id);
      const movieOwner = String(movie.owner);
      if (user === movieOwner) {
        Movies.findByIdAndRemove(req.params.movieId)
          .then((deletedMovie) => res.send(deletedMovie));
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
