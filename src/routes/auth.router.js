const express = require("express");
const authRouter = express.Router();
const { postAuthLogin, postAuthSignup } = require("../controllers/auth.controller");
const payloadMiddleWare = require("../middlewares/payload.middleware");
const { signupSchema, loginSchema } = require("../models/schemas/auth.schema");

// const {
//   healthController,
//   pingController,
// } = require("../controllers/public.controller");

authRouter.post("/signup", payloadMiddleWare(signupSchema) ,postAuthSignup);
authRouter.post("/login", payloadMiddleWare(loginSchema), postAuthLogin);


module.exports = authRouter;
