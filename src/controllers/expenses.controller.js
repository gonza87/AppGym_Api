const { getExpenses, findExpenses, createExpense, deleteExpense, updateExpense } = require("../models/storage");
const sendMail = require("../services/mailjet.service");
const expensesSchema = require("../models/schemas/expense.schema");

const getExpensesController = (req, res) => {
    res.status(200).json(getExpenses())
}

const getExpenseControllerById = (req, res) => {
    const expense = findExpenses(req.params.id)
    if (expense) {
        res.status(200).json(expense);
    } else {
        res.status(404).json({
            message: `Gasto no encontrado`
        })
    }
}

// const postExpenseController = async (req, res) => {
//     const { concepto, costo, fecha, categoria } = req.body;
//     const { error } = expensesSchema.validate(req.body);
//     // const response = await sendMail(concepto);
//     // console.log(response);
//     if(error){
//         res.status(403).json({
//             message: `Invalid Payload`
//         })
//     }
//     createExpense(concepto, costo, fecha, categoria);
//     res.status(201).json({
//         message: "Gasto creado correctamente"
//     })
// }

const postExpenseController = async (req, res) => {
    const { concepto, costo, fecha, categoria } = req.body;
    createExpense(concepto, costo, fecha, categoria);
    res.status(201).json({
        message: "Gasto creado correctamente"
    })
}

const putExpenseController = (req, res) => {
    const id = req.params.id;
    const updated = updateExpense(id, req.body)
    if (updated) {
        res.status(200).json(updated)
    } else {
        res.status(404).json({
            message: `Gasto no encontrado`
        })
    }
}

const deleteExpenseController = (req, res) => {
    const deleted = deleteExpense(req.params.id)
    if (deleted) {
        res.status(204).json({
            message: "Gasto eliminado correctamente"
        })
    } else {
        res.status(404).json({
            message: `Gasto no encontrado`
        })
    }
}

module.exports = {
    getExpensesController,
    getExpenseControllerById,
    postExpenseController,
    putExpenseController,
    deleteExpenseController
}