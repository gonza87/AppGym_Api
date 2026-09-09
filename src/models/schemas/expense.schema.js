const Joi = require("joi");

const expensesSchema = Joi.object({
    concepto: Joi.string().min(3).max(20).required(),
    costo: Joi.number().positive().required(),
    fecha: Joi.date().iso().required(),
    categoria: Joi.string().optional()
})


const { error, value } = expensesSchema.validate({
    concepto: 80,
    costo: 90,
    fecha: "2026-07-21",
    categoria: "Vivienda"
})

// if(error) {
//     console.log(error.details);
// } else {
//     console.log("OK", value);   
// }

module.exports = expensesSchema