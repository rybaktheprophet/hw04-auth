const Joi = require('joi');
const { AppError } = require('../../utils/index');

/**
 * Validation on name, email or phone to updete contacts
 */
const updeteContactValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).optional(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .optional(),

    phone: Joi.string().optional(),
  });

  const validationsResult = schema.validate(req.body);

  if (validationsResult.error) {
    const [objError] = validationsResult.error.details;

    return next(new AppError(400, objError.message));
  }

  next();
};

module.exports = {
  updeteContactValidator,
};
