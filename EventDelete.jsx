import React from 'react';

const EventDelete = ({ eventId }) => {
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:9292/events/${eventId}`, {
        method: 'DELETE',
      });
      
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h2>Delete Event</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EventDelete;
