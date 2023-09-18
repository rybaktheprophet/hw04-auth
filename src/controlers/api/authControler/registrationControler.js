const { registration } = require('../../../services/index');
const { catchWraper } = require('../../../utils/index');

/**
 * Registratioon User
 */
const registrationControler = catchWraper(async (req, res, next) => {
  const { email, password } = req.body;

  const newUser = await registration(email, password);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

module.exports = {
  registrationControler,
};
