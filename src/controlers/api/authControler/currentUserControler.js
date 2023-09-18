/**
 * Get current user
 */
const currentUserControler = (req, res, next) => {
  const { email, subscription } = req.user;

  res.status(200).json({
    user: {
      email,
      subscription,
    },
  });
};

module.exports = {
  currentUserControler,
};
