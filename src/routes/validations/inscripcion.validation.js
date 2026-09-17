const Joi = require("joi");

const inscripcionValidation = Joi.object({
  userId: Joi.string().required(),
  categoryId: Joi.string().required(),
  fecha: Joi.date().required(),
});

module.exports = { inscripcionValidation };
