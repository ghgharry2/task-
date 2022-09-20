import Employee from "../models/Employee.js";

export const createEmployee = async (req, res, next) => {

    const newEmployee = new Employee(req.body);
    try {
        const savedEmployee = newEmployee.save();
        res.status(200).json(savedEmployee);
    } catch (err) {
        next(err)
    }

};
export const getOne = async (req, res, next) => {

    try {
        const employee = await Employee.findOne({ id: req.params.id });
        const { id, reports_to, _id, ...otherDetails } = employee._doc;
        res.status(200).json({ details: { ...otherDetails } });
    } catch (err) {
        next(err);
    }

}
export const reportsTo = async (req, res, next) => {
    try {

        const employee = await Employee.find({ reports_to: req.params.id }, { 'id': 1, '_id': 0 });
        res.status(200).json(employee);
    } catch (err) {
        next(err)
    }
};

;