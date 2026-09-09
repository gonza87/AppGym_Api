const expenses = []
let currentId = 1;


const getExpenses = () => expenses;

const findExpenses = (id) => expenses.find((e) => e.id == id);

const createExpense = (concepto, costo, fecha, categoria) => {
    const newExpense = {
        id: currentId++,
        concepto,
        costo,
        fecha,
        categoria: categoria || null
    }
    expenses.push(newExpense);
    return newExpense;
}


const deleteExpense = (id) => {
    let indexToBeDeleted = expenses.findIndex((e) => e.id == id);
    if(indexToBeDeleted === -1) return false;

    expenses.splice(indexToBeDeleted, 1);
    return true;
}

const updateExpense = (id, body) => {
    const index = expenses.findIndex((toDo) => toDo.id == id);
    if(index >= 0){
        expenses[index] = {...expenses[index], ...body}
    }
    return expenses[index];
}

module.exports = {
    getExpenses,
    findExpenses,
    createExpense,
    deleteExpense,
    updateExpense
}