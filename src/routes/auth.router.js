const express = require("express");
const authRouter = express.Router();
const { postAuthLogin, postAuthSignup } = require("../controllers/auth.controller");
const payloadMiddleWare = require("../middlewares/payload.middleware");
const { signupValidation, loginValidation } = require("./validations/user.validation");

// const {
//   healthController,
//   pingController,
// } = require("../controllers/public.controller");

authRouter.post("/signup", payloadMiddleWare(signupValidation) ,postAuthSignup);
authRouter.post("/login", payloadMiddleWare(loginValidation), postAuthLogin);


module.exports = authRouter;
