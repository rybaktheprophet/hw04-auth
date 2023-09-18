const { User } = require('../models/index');

/**
 * registration new user on DB User
 */

const registration = async (email, password) => {
  const user = new User({
    email,
    password,
  });

  await user.save();

  return user;
};

module.exports = {
  registration,
};
