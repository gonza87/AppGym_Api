const express = require("express");
const router = express.Router();

const {
  getActividadesController,
  getActividadControllerById,
} = require("../controllers/actividades.controller");

//const payloadMiddleware = require("../middlewares/payload.middleware");
//const expensesSchema = require("../models/schemas/expense.schema");

router.get("/actividades", getActividadesController);

router.get("/actividades/:id", getActividadControllerById);

// router.post(
//   "/expenses",
//   payloadMiddleware(expensesSchema),
//   postExpenseController,
// );

// router.delete("/expenses/:id", deleteExpenseController);

// router.put("/expenses/:id", putExpenseController);

module.exports = router;
