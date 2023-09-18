const { login } = require('../../../services/index');
const { catchWraper } = require('../../../utils/index');

/**
 * Login User
 */
const loginControler = catchWraper(async (req, res, next) => {
  const resultLogin = await login(req.user);

  res.status(200).json({ resultLogin });
});

module.exports = {
  loginControler,
};
