import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RSVPForm from './RSVPForm';
import EditForm from './EditForm';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [showRSVPForm, setShowRSVPForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9292/events/${id}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
    fetchEventDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:9292/events/${id}`, {
        method: 'DELETE',
      });

      navigate('/events', { replace: true });
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleRSVP = () => {
    setShowRSVPForm(true);
    setShowEditForm(false);
  };

  const handleEdit = () => {
    setShowEditForm(true);
    setShowRSVPForm(false);
  };

  return (
    <div>
      <h2>Event Details</h2>
      <p>Name: {event.name}</p>
      <p>Date: {event.datetime}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <div>
        <button onClick={handleRSVP}>RSVP</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      
      {showRSVPForm && (
        <RSVPForm eventId={id} onClose={() => setShowRSVPForm(false)} />
      )}

      {showEditForm && (
        <EditForm event={event} onClose={() => setShowEditForm(false)} />
      )}
    </div>
  );
};

export default EventDetails;
