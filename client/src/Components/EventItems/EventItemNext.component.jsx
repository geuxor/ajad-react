import React from 'react';
import moment from 'moment';
import "./EventItemNext.style.css";

function NextEvent({ nextEvent }) {

  return (
    <div className="next-event">
      <p>NEXT EVENT</p>
      <div className="next-date">
        <div>{moment(nextEvent.date).format("DD-MMM-YY")}</div>
        <div className="px-2">at</div>
        <div>{moment(nextEvent.date).format("HH:mm")}</div>
      </div>
      <div className="next-title">{nextEvent.title}</div>
      <div className="next-venue">{nextEvent.venue}</div>
    </div>
  );
}

export default NextEvent;
