// const loggerMiddleware = (req, res, next) => {
//     console.log("Hola soy un middleware");
//     next();
// }

// module.exports = loggerMiddleware;


//---------------------------------------------------------


// const { logRequest } = require("./logger")

// const loggerMiddleware = (req, res, next) => {
//     logRequest(req.method, req.path, res.statusCode)
//     next();
// }

// module.exports = loggerMiddleware;


//---------------------------------------------------------

const { logRequest } = require("../utils/logger")

const loggerMiddleware = (req, res, next) => {
    res.on("finish", () => {
        logRequest(req.method, req.path, res.statusCode)
    })
    next();
}

module.exports = loggerMiddleware;