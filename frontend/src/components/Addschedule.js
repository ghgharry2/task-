import React from 'react';
import Scheduleform from './Scheduleform';

const Addschedule = () => {
  const handleOnSubmit = (task) => {
    console.log(task);
  };

  return (
    <React.Fragment>
      <Scheduleform handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default Addschedule;