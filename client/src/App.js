import './App.css';
import React, { useState, useEffect } from 'react'
import { getEvents, postEvent } from './Services/ApiService';
import EventList from './Components/EventList/EventList.component'
import EventForm from './Components/EventForm/EventForm.component'
import Listgroup from './Components/Listgroup/Listgroup.component';

function App() {
  const [events, setEvents] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    (async () => {
      const eventList = await getEvents()
      setEvents(eventList)
      // const categoryList = await getEvents()
      // setCategories(categoryList)
    })()
  }, [])
  
  const addEvent = async (event) => {
    const newEvent = await postEvent(event)
    setEvents((prev) => [...prev, newEvent])
  }

  return (
    <div className="App">
      <div className="title">
        Latest Events
      </div>
      <div className="main">
        <div className="events">
          <EventList events={events} />
        </div>
        <div>
        {/* <div className="cat-list">
            <Listgroup categories={categories}/>
        </div> */}
        <div className="form">
          <EventForm addEvent={addEvent} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App
