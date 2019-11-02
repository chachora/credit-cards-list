const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),
  number: Joi.string()
    .creditCard()
    .required(),
  limit: Joi.number().required(),
});

module.exports = schema;
