const express = require("express");
const router = express.Router();
const {
    getExpensesController,
    getExpenseControllerById,
    postExpenseController,
    putExpenseController,
    deleteExpenseController
} = require("../controllers/expenses.controller");
const payloadMiddleware = require("../middlewares/payload.middleware");
const expensesSchema = require("../models/schemas/expense.schema")

router.get("/expenses", getExpensesController);

router.get("/expenses/:id", getExpenseControllerById);

router.post("/expenses", payloadMiddleware(expensesSchema), postExpenseController);

router.delete("/expenses/:id", deleteExpenseController)

router.put("/expenses/:id", putExpenseController);

module.exports = router;