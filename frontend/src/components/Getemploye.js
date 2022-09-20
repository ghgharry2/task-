import axios from 'axios';
import React from 'react';

const Getemploye = async (e) => {
    e.preventDefault();
    try {
        const employee = await axios.get("/auth/login", credentials);
    } catch (err) {

    }

    return <h2>List of books</h2>;
};

export default Getemploye;