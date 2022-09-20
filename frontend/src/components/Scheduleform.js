import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import "./addcomponet.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Scheduleform = (props) => {

    const navigate = useNavigate();

    const [schedule, setschedule] = useState({
        start_time: props.schedule ? props.schedule.Start_name : '',
        end_time: props.schedule ? props.schedule.end_time : '',
        title: props.schedule ? props.schedule.title : '',
        description: props.schedule ? props.schedule : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { start_time, end_time, title, description } = schedule;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [start_time, end_time, title, description];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const schedule = {
                start_time, end_time, title, description
            };
            const res = axios.post("/schedules", schedule);
            navigate("/Schedule")
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        setschedule((prev) => ({ ...prev, [event.target.id]: event.target.value }));
        const { name, value } = event.target;

    };

    return (
        <div className='centered-content'>
            <div className='main-form'>
                {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>title</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="title"
                            value={title}
                            placeholder="title"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>description</Form.Label>
                        <Form.Control
                            className="input-control"
                            type="text"
                            name="description"
                            value={description}
                            placeholder="description"
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Group controlId="start_time">
                            <Form.Label>Start time</Form.Label>
                            <Form.Control
                                className="input-control"
                                type="text"
                                name="start_time"
                                value={start_time}
                                placeholder="start time"
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Group controlId="end_time">
                                <Form.Label>end time</Form.Label>
                                <Form.Control
                                    className="input-control"
                                    type="text"
                                    name="end time"
                                    value={end_time}
                                    placeholder="ennd time"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Form.Group>

                    </Form.Group>
                    <Button variant="primary" type="submit" className="submit-btn">
                        Submit
                    </Button>

                </Form>
            </div>
        </div >
    );
};
export default Scheduleform;