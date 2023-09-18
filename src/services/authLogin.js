const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

/**
 * Login user
 */

const login = async user => {
  const token = jwt.sign(
    {
      id: user._id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET
  );

  await User.findByIdAndUpdate(user._id, { token });

  return {
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  };
};

module.exports = {
  login,
};
