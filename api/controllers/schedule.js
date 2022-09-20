import Schedule from "../models/Schedule.js";


export const createSchedule = async (req, res, next) => {
    const newSchedule = new Schedule(req.body)
    try {
        const savedSchedule = newSchedule.save();
        res.status(200).json(savedSchedule);
    } catch (err) { next(err) }
};

export const UpdateSchedule = async (req, res, next) => {
    try {
        const updatedSchedule = await Schedule.findOne({ id: req.params.id }, { $push: { 'schedule.schedule': Schedule.schedule } });
        res.status(200).json(updatedSchedule);
    } catch (err) { next(err); }
};

export const getSchedule = async (req, res, next) => {
    try {
        const schedule = await Schedule.find({ id: req.params.id });
        res.status(200).json({ details: { schedule } });
    } catch (err) {
        next(err);
    }
};

export const getAllSchedule = async (req, res, next) => {
    try {
        const schedule = await Schedule.find();
        res.status(200).json(schedule);
    } catch (err) {
        next(err)
    }
};
export const deleteSchedule = async (req, res, next) => {

    try {
        await Schedule.findOneAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Schedule deleted");
    } catch (err) {
        next(err);
    }
};

