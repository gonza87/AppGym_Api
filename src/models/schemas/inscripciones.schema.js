const mongoose = require("mongoose");

const inscripcionesSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    actividadId: { type: String, required: true },
    fecha: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = inscripcionesSchema;
