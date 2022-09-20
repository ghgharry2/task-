import React from 'react';
import axios from 'axios';

const ScheduleList = async (e) => {
    e.preventDefault();

    const employeesch = await axios.get("/auth/login");

    return <h2>List of books</h2>;
};

export default ScheduleList;