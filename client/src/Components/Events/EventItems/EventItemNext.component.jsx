import React from 'react';
import moment from 'moment';
import "./EventItemNext.style.css";

function NextEvent({ nextEvent }) {
const bgimg = {backgroundImage: "url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)"}

  return (
    <div className="next-card" style={bgimg}>
      <p>NEXT EVENT</p>
      <div className="next-date">
        <div className="next-date-date">
          {moment(nextEvent.date).format("DD-MMM-YY")}
        </div>
        <div className="px-2">at</div>
        <div className="next-date-hr">
          {moment(nextEvent.date).format("HH:mm")}
        </div>
      </div>
      <div className="next-title">{nextEvent.title}</div>
      <div className="next-venue">{nextEvent.venue}</div>
    </div>
  );
}

export default NextEvent;
