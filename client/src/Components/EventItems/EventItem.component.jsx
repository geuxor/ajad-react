import React from "react";
import moment from "moment";
import "./EventItem.style.css";

function EventItem({ event }) {

  return (
      <div className="eventItems">
        <div className="event-date">
          <div className="event-date-date">{moment(event.date).format("DD-MMM-YYYY")}</div>
          <div className="event-date-at">at</div>
          <div className="event-date-time">{moment(event.date).format("HH:mm")}</div>
        </div>
        <div className="event-desc">
          <div className="event-title">
            <h3>{event.title}</h3>
          </div>
          <div className="eventVenue">
            <p>{event.venue}</p>
          </div>
        </div>
      </div>
  );
}

export default EventItem;
