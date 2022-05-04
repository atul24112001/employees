import Employee from "../models/EmployeeModel.js";
import mongoose from "mongoose";

export const CreateEmployee = async (req, res) => {
    const employee = req.body;
    const newEmployee = new Employee(employee)

    try {
        await newEmployee.save();
        res.status(200).json({
            status: "success",
            data: newEmployee
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

export const GetEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({
            status: "success",
            data: employees
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

export const UpdateEmployees = async (req, res) => {
    const { id: _id } = req.params;
    const employee = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Employee with Such id')

    const updatedEmployee = await Employee.findByIdAndUpdate(_id, employee, { new: true })
    res.status(200).json(updatedEmployee);
}