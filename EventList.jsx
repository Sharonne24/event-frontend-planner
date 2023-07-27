import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Css/style.css'

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the list of events from the backend API
    fetch('http://localhost:9292/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <Link key={event.id} to={`/event/${event.id}`}>
          <div>
            <h3>{event.name}</h3>
            <p>Date: {event.datetime}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventList;
