import mongoose from "mongoose";

const EmployeesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    reports_to: {
        type: String,
    },


});

export default mongoose.model("Employee", EmployeesSchema);
