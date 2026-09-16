const express = require("express");
const router = express.Router();

const {
  getActividadesController,
  getActividadControllerById,
  postActividadController,
  putActividadController,
  deleteActividadController,
} = require("../controllers/actividades.controller");


const payloadMiddleWare = require("../middlewares/payload.middleware");
const { actividadValidation } = require("./validations/actividad.validation");



router.get("/actividades",  getActividadesController);

router.get("/actividades/:id", getActividadControllerById);

router.post("/actividades", payloadMiddleWare(actividadValidation), postActividadController);

router.delete("/actividades/:id", deleteActividadController);

router.put("/actividades/:id", payloadMiddleWare(actividadValidation), putActividadController);

module.exports = router;
