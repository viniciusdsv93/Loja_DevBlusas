import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`);

let db = mongoose.connection;

export { db };
