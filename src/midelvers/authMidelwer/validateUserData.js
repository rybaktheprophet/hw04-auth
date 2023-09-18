const Joi = require('joi');
const { AppError } = require('../../utils/index');

/**
 * Validation of user password and email at registration
 */
const chekUserData = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(6).max(60).required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
  });

  const validationsResult = schema.validate(req.body);

  if (validationsResult.error) {
    const [objError] = validationsResult.error.details;

    return next(new AppError(400, objError.message));
  }

  next();
};

module.exports = {
  chekUserData,
};
