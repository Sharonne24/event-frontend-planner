import React, { useState } from 'react';

const EditForm = ({ event, onClose }) => {
  const [name, setName] = useState(event.name);
  const [datetime, setDatetime] = useState(event.datetime);
  const [location, setLocation] = useState(event.location);
  const [description, setDescription] = useState(event.description);

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const updatedEvent = {
        name,
        datetime,
        location,
        description,
      };

      const response = await fetch(`http://localhost:9292/events/${event.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEvent),
      });

      if (response.ok) {
        
        onClose(); 
      } else {
        
        console.error('Failed to update event.');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h2>Edit Event</h2>
      <form onSubmit={handleEdit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Date:</label>
          <input type="text" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
