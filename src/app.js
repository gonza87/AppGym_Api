require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/logger.middleware")
const authMiddleware = require("./middlewares/auth.middleware")
const router = require("./routes/private.router");
const publicRouter = require("./routes/public.router")

const app = express();


// app.use(cors({
    //     methods: "GET, POST, PUT",
    //     origin: '*' //["https://mi-dominio.com", ]
    // }))
    
app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.use("/public", publicRouter)

app.use(authMiddleware);

app.use("/v1", router)

app.listen(process.env.PORT, () => {
    console.log("Listen & serve PORT:3000");
})