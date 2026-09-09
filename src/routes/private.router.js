const express = require("express");
const router = express.Router();

const {
  getActividadesController,
  getActividadControllerById,
  postActividadController,
  putActividadController,
  deleteActividadController,
} = require("../controllers/actividades.controller");

//const payloadMiddleware = require("../middlewares/payload.middleware");
//const expensesSchema = require("../models/schemas/expense.schema");

router.get("/actividades", getActividadesController);

router.get("/actividades/:id", getActividadControllerById);

router.post("/actividades", postActividadController);

router.delete("/actividades/:id", deleteActividadController);

router.put("/actividades/:id", putActividadController);

module.exports = router;
