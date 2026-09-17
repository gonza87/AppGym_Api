const Joi = require("joi");

const inscripcionValidation = Joi.object({
  userId: Joi.string().required(),

  actividadId: Joi.string().required(),
  fecha: Joi.date().required(),
});

module.exports = { inscripcionValidation };
