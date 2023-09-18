const bcrypt = require('bcrypt');

const { AppError } = require('../../utils/index');
const { User } = require('../../models/index');

/**
 * Verification of password and email at user login
 */
const userDataIsValid = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return next(new AppError(409, 'Email or password is wrong'));

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) return next(new AppError(409, 'Email or password is wrong'));

  req.user = user;

  next();
};

module.exports = {
  userDataIsValid,
};
