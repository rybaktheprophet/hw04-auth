const jwt = require('jsonwebtoken');
const { AppError } = require('../../utils');
const { User } = require('../../models/index');

/**
 * Verify the token and write it to the request
 */
const authDecodedMidelwer = async (req, res, next) => {
  const headerAuthoriz = req.headers['authorization'];

  if (!headerAuthoriz) return next(new AppError(401, 'Not authorized'));

  const [tokenType, token] = headerAuthoriz.split(' ');

  if (!token) return next(new AppError(401, 'Not authorized'));

  try {
    const { id } = jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findById(id);

    if (!user || !user.token) return next(new AppError(401, 'Not authorized'));

    req.token = token;
    req.user = user;

    next();
  } catch (err) {
    next(new AppError(401, 'Not authorized'));
  }
};

module.exports = {
  authDecodedMidelwer,
};
