import express from "express";
import sequelize from "./db/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config(); //usar env vars
const port = process.env.port || 8000

try {
    await sequelize.authenticate().then(() =>  console.log('DB Connected'));
} catch (error) {
    console.log(error)
}

app.listen(port,  () => {
    console.log(`App listening on port ${port}`)
})

