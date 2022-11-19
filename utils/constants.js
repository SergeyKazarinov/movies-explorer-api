const SERVER_ERROR_CODE = 500;
const SERVER_ERROR_MESSAGE = 'Неизвестная ошибка сервера';
const NOT_FOUND_ROUTE_MESSAGE = 'Запрашиваемый адрес запроса не найден';
const NOT_FOUND_USER_ID_MESSAGE = 'Пользователь с указанным id не найден.';
const NOT_FOUND_MOVIE_ID_MESSAGE = 'Фильм с указанным id не найден.';
const NOT_RIGHTS_MESSAGE = 'У вас нет прав на удаление';
const INCORRECT_DATA_MESSAGE = 'Переданы не корректные данные';
const LOGIN_ERROR_MESSAGE = 'Неверное имя пользователя или пароль';
const NOT_REGISTERED_MESSAGE = 'Необходима авторизация.';
const EXIST_EMAIL_MESSAGE = 'Пользователь с таким Email уже существует.';
const INVALID_LINK = 'Ссылка не является валидной';
const ENTER_EMAIL = 'Введите пожалуйста Email';

const EMAIL_REQUIRED = 'Поле email должно быть заполнено.';
const PASSWORD_REQUIRED = 'Поле password должно быть заполнено';
const NAME_REQUIRED = 'Поле name должно быть заполнено';
const MIN_LENGTH = 'Минимальная длинна поля - 2';
const MAX_LENGTH = 'Минимальная длинна поля - 30';

const COUNTRY_REQUIRED = 'Поле country должно быть заполнено';
const DIRECTOR_REQUIRED = 'Поле director должно быть заполнено';
const DURATION_REQUIRED = 'Поле duration должно быть заполнено';
const YEAR_REQUIRED = 'Поле year должно быть заполнено';
const DESCRIPTION_REQUIRED = 'Поле description должно быть заполнено';
const IMAGE_REQUIRED = 'Поле image должно быть заполнено';
const TRAILER_LINK_REQUIRED = 'Поле trailerLink должно быть заполнено';
const THUMBNAIL_REQUIRED = 'Поле thumbnail должно быть заполнено';
const OWNER_REQUIRED = 'Поле owner должно быть заполнено';
const MOVIE_ID_REQUIRED = 'Поле movieId должно быть заполнено';
const NAME_RU_REQUIRED = 'Поле nameRu должно быть заполнено';
const NAME_EN_REQUIRED = 'Поле nameEn должно быть заполнено';

module.exports = {
  SERVER_ERROR_CODE,
  SERVER_ERROR_MESSAGE,
  NOT_FOUND_ROUTE_MESSAGE,
  INCORRECT_DATA_MESSAGE,
  LOGIN_ERROR_MESSAGE,
  NOT_FOUND_USER_ID_MESSAGE,
  NOT_FOUND_MOVIE_ID_MESSAGE,
  NOT_RIGHTS_MESSAGE,
  NOT_REGISTERED_MESSAGE,
  EXIST_EMAIL_MESSAGE,
  INVALID_LINK,
  ENTER_EMAIL,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  NAME_REQUIRED,
  MIN_LENGTH,
  MAX_LENGTH,
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
};
