import React from "react";
import moment from "moment";
import "./EventItem.style.css";
import { NavLink } from "react-router-dom";

function EventItem({ event }) {
  return (
    <NavLink
      to={`/events/${event._id}`}
      className="event-link"
    >
      <div className="event-card">
        <div className="event-date">
          <div className="event-date-date">
            {moment(event.date).format("DD-MMM")}
          </div>
          <div className="event-date-at">at</div>
          <div className="event-date-time">
            {moment(event.date).format("HH:mm")}
          </div>
        </div>
        <div className="event-info">
          <div className="event-title">{event.title}</div>
          <div className="event-venue">{event.venue}</div>
        </div>
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="x"/>
      </div>
    </NavLink>
  );
}

export default EventItem;

// <div className="eventItems">
//   <div className="event-date">
//     <div className="event-date-date">
//       {moment(event.date).format("DD-MMM-YYYY")}
//     </div>
//     <div className="event-date-at">at</div>
//     <div className="event-date-time">
//       {moment(event.date).format("HH:mm")}
//     </div>
//   </div>
//   <div className="event-desc">
//     <div className="event-title">
//       <h3>{event.title}</h3>
//     </div>
//     <div className="eventVenue">
//       <p>{event.venue}</p>
//     </div>
//   </div>
