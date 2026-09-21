const mongoose = require("mongoose");



const connectMongoDB = async () => {
    const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
    const MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const MONGODB_CONNECTION_TIMEOUT = process.env.MONGODB_CONNECTION_TIMEOUT;

  try {
        await mongoose.connect(MONGODB_CONNECTION_STRING, {
            dbName: MONGODB_DATABASE_NAME, // <--- Especifica la base de datos aquí
            serverSelectionTimeoutMS: Number(MONGODB_CONNECTION_TIMEOUT) || 3000
        });
        console.log(`Conexión a MongoDB en la base '${MONGODB_DATABASE_NAME}' establecida correctamente`);
    } catch (error) {
        console.error("Ocurrió un error al conectarse a MongoDB", error);
    }
};

 /*(async () => {
    await connectMongoDB();
 })()*/

module.exports = connectMongoDB;