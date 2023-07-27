import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventCreationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    datetime: '',
    location: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9292/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Event created successfully!');
        setFormData({
          name: '',
          datetime: '',
          location: '',
          description: '',
        });
        navigate('/events');
      } else {
        console.error('Failed to create event.');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleInputChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EventCreationForm;
