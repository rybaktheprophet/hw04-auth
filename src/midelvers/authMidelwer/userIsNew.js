const { User } = require('../../models/index');
const { AppError } = require('../../utils/index');

/**
 * Check the user's email against the database
 */
const userIsNew = async (req, res, next) => {
  const { email } = req.body;
  const userIsExists = await User.exists({ email });

  if (userIsExists) return next(new AppError(409, 'Email in use'));

  next();
};

module.exports = {
  userIsNew,
};
