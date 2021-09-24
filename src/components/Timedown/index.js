import React from 'react';
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <span>...</span>;
  } else {
    // Render a countdown
    return (
      <span>
        {hours < 10 ? '0'+hours : hours }:{minutes < 10 ? '0'+minutes : minutes }:{seconds < 10 ? '0'+seconds : seconds }
      </span>
    );
  }
};

const Time = ({ startTime }) => {
  return (
    <Countdown date={startTime} renderer={renderer} />
  );
};

export default Time