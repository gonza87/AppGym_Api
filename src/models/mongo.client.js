const mongoose = require("mongoose");

let connectionPromise = null;

const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
    const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;

    if (!MONGODB_CONNECTION_STRING) {
      throw new Error("MONGODB_CONNECTION_STRING no está configurada");
    }

    const options = {
      serverSelectionTimeoutMS:
        Number(process.env.MONGODB_CONNECTION_TIMEOUT) || 10000,
    };

    if (MONGODB_DATABASE_NAME) {
      options.dbName = MONGODB_DATABASE_NAME;
    }

    connectionPromise = mongoose
      .connect(MONGODB_CONNECTION_STRING, options)
      .then((conn) => {
        console.log("Conexion a mongo db establecida correctamente");
        return conn;
      })
      .catch((error) => {
        console.error("Ocurrio un error al conectarse a MongoDB", error);
        connectionPromise = null;
        throw error;
      });
  }
  return connectionPromise;
};

module.exports = connectMongoDB;
