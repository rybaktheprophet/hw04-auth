const { User } = require('../../../models/index');
const { catchWraper } = require('../../../utils/index');

/**
 * Logout user
 */
const logoutControler = catchWraper(async (req, res, next) => {
  const { id } = req.user;

  await User.findByIdAndUpdate(id, { token: null });

  res.sendStatus(204);
});

module.exports = {
  logoutControler,
};
