const { AppError } = require('../../utils/index');

/**
 * Checking req.body for an empty object
 */
const checkReqBody = (req, res, next) => {
  const arr = Object.keys(req.body);

  if (arr.length === 0) return next(new AppError(400, 'missing fields'));

  next();
};

/**
 *  Checking exist favorite
 */
const checkExistFavorite = (req, res, next) => {
  const { favorite } = req.body;

  if (favorite === undefined) return next(new AppError(400, 'missing field favorite'));

  next();
};

module.exports = {
  checkReqBody,
  checkExistFavorite,
};
