const mongoose = require("mongoose");



const connectMongoDB = async () => {
    const MONGODB_CONNECTION_STRING ="mongodb+srv://gonzavi_db_user:Rz56WaqKdFV5PZJk@cluster0.yzruk6j.mongodb.net/?appName=Cluster0"; //process.env.MONGODB_CONNECTION_STRING;
    const MONGODB_DATABASE_NAME = "";//process.env.MONGODB_DATABASE_NAME;
    const MONGODB_CONNECTION_TIMEOUT = process.env.MONGODB_CONNECTION_TIMEOUT;
//console.log("MONGODB_CONNECTION_STRING", MONGODB_CONNECTION_STRING);
//console.log(process.env.PORT)
    try {
        await mongoose.connect(`${MONGODB_CONNECTION_STRING}/${MONGODB_DATABASE_NAME}`,{
            serverSelectionTimeoutMS:MONGODB_CONNECTION_TIMEOUT
        });
        console.log("Conexion a mongo db establecida correctamente");
    } catch (error) {
        console.error("Ocurrio un error al conectarse a MongoDB", error);
    }
};

 (async () => {
    await connectMongoDB();
 })()

module.exports = connectMongoDB;