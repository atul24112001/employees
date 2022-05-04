import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";
import BodyParser from "body-parser"
import cors from "cors";
import EmployeesRouter from "./routes/employees.js";

Dotenv.config();

const app = express();

app.use(BodyParser.json({ limit: "30mb", extended: true }));
app.use(BodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/employees", EmployeesRouter);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
    .catch(error => console.log(error.message))