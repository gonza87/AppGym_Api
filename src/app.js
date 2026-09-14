require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const loggerMiddleware = require("./middlewares/logger.middleware");
const authMiddleware = require("./middlewares/auth.middleware");
const privateRouter = require("./routes/private.router");
const publicRouter = require("./routes/public.router");
const authRouter = require("./routes/auth.router");

const app = express();

// app.use(cors({
//     methods: "GET, POST, PUT",
//     origin: '*' //["https://mi-dominio.com", ]
// }))

app.use(express.json());
app.use(loggerMiddleware);
app.use(morgan("dev"));
app.use(cors());


app.use("/public", publicRouter);
app.use("/v1/auth", authRouter);
app.use(authMiddleware);




// Private
app.use("/v1", privateRouter);

app.listen(process.env.PORT, () => {
  console.log("Listen & serve PORT:3000");
});
