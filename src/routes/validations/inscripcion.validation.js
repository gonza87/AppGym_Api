const Joi = require("joi");

const inscripcionValidation = Joi.object({
  userId: Joi.string().hex().length(24).required(),
  activityId: Joi.string().hex().length(24).required(),
  date: Joi.date().required(),
});

module.exports = { inscripcionValidation };
