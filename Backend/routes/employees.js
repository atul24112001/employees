import express from "express";
const router = express.Router();
import { CreateEmployee, GetEmployees, UpdateEmployees } from "../Controllers/employees.js"

router.route("/").post(CreateEmployee).get(GetEmployees);
router.patch("/:id", UpdateEmployees);

export default router;