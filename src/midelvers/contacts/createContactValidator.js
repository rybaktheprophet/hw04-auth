const Joi = require('joi');
const { AppError } = require('../../utils/index');

/**
 * Contacts validation on name, email or phone
 */
const createContactValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),

    phone: Joi.string().required(),
  });

  const validationsResult = schema.validate(req.body);

  if (validationsResult.error) {
    const [objError] = validationsResult.error.details;

    return next(new AppError(400, objError.message));
  }

  next();
};

module.exports = {
  createContactValidator,
};
