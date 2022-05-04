import mongoose from "mongoose";

const EmployeeModal = new mongoose.Schema({
    employee_name: String,
    employee_salary: Number,
    employee_age: Number,
    profile_image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNWVnKZZfy-1CLo75eO5vLhTWFZyeyc7QaI6GgdSalXDIJOCA6t0DSdDDMabrTOdjdYs&usqp=CAU"
    },
    date_of_creation: {
        type: String,
        default: () => Date()
    }
})

const Employee = mongoose.model("Employee", EmployeeModal);

export default Employee;