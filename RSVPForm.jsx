
import React, { useState } from 'react';
import './Css/style.css'

const RSVPForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRSVP = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');

    onClose();
  };

  return (
    <div>
      <h2>RSVP Form</h2>
      <form onSubmit={handleRSVP}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">RSVP</button>
      </form>
    </div>
  );
};

export default RSVPForm;
