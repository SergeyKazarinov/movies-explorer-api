const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { signIn, signUp } = require('../controllers/users');
const auth = require('../middlewares/auth');
const signInValidation = require('../validation/signInValidation');
const signUpValidation = require('../validation/signUpValidation');
const notFoundController = require('../controllers/notFoundController');

router.post('/signin', signInValidation, signIn);
router.post('/signup', signUpValidation, signUp);

router.use(auth);

router.use('/', userRouter);
router.use('/', movieRouter);

router.use('*', notFoundController);

module.exports = router;
