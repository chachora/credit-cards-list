const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  number: Joi.string()
    .pattern(/^[0-9]{13,19}$/)
    .required()
    .error(errors => {
      errors.forEach(err => {
        if (err.code === 'string.pattern.base') {
          err.message = 'Wrong credit card number';
        }
      });
      return errors;
    }),
  limit: Joi.number().required(),
});

module.exports = schema;
