import mongoose from 'mongoose';



const ScheduleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    schedule: [{
        start_time: String,
        end_time: String,
        title: String,
        description: String
    }],



},);

export default mongoose.model("Schedule", ScheduleSchema);