import React, { useState } from "react";
import EventItem from "../EventItems/EventItem.component";
import "./EventList.style.css";
import NextEvent from "../EventItems/EventItemNext.component";
import { paginate } from "../common/paginate"
import Pagination from "../common/Pagination.component";


function EventList({ events }) {
  const [pageSize, setPageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const now = new Date();
  const upcomingEvents = events.filter(
    (event) => (new Date(event.date) !== null) & (new Date(event.date) > now)
    );
  const sortedEvents = upcomingEvents.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  const eventItems = sortedEvents
    .filter((ev, i) => i !== 0)
    .map((eventitem) => <EventItem key={eventitem._id} event={eventitem} />);
    // console.log('eventItems.length', eventItems.length);
  const paginatedEvents = paginate(eventItems, currentPage, pageSize);

  const handlePageChange = (page) => {
      // console.log('page changed again', page);
      setCurrentPage(page);
    };

  const handlePageSizeChange = (amount) => {
    setPageSize(amount);
  };

  return (
    <div>
      <ul className="container" id="list">
        {sortedEvents.map((nextev, i) => {
          return i === 0 ? (
            <NextEvent nextEvent={nextev} key={nextev._id} />
          ) : (
            ""
          );
        })}
        {paginatedEvents}
      </ul>
      <div className="main-pagination">
        <Pagination
          itemsCount={sortedEvents.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}
export default EventList;
