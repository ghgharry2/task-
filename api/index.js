import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import schedulesRoute from "./routes/schedules.js";
import employeesRoute from "./routes/employees.js";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO);
        console.log("connected to db")
    } catch (error) {
        throw (error);
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})


app.get("/", (req, res) => {
    res.send("hello first req")
})

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/schedules', schedulesRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8800, () => {
    connect()
    console.log("Connectd to backend!")
})