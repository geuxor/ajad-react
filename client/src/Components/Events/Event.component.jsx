import React, { useState, useEffect } from "react";
import { getEvents, postEvent } from "../../Services/ApiService";
import EventList from "../Events/EventList/EventList.component";
import EventForm from "../utils/EventForm/EventForm.component";
import "./Event.style.css";

function Event(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const eventList = await getEvents();
      setEvents(eventList);
      // const categoryList = await getEvents()
      // setCategories(categoryList)
    })();
  }, []);

  const addEvent = async (event) => {
    const newEvent = await postEvent(event);
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <div>
      <div className="main">
        <div className="events">
          <EventList events={events} />
        </div>
        <div>
          <div className="form">
            <EventForm addEvent={addEvent} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Event;
