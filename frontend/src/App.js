import React from 'react';
import Schedule from './pages/Schedule/Schedule';
import ScheduleList from './components/ScheduleList';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addschedule from './components/Addschedule.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="schedule/" element={<Schedule />} />
        <Route path="/addschedule" element={<Addschedule />} />
        <Route path="/schedullist" component={< ScheduleList />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
