import React, { useState } from 'react';
import './Css/style.css'

const EventSignup = () => {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission for user signup
  const handleSignup = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
  };

  return (
    <div>
      <h2>Sign Up for the Event</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default EventSignup;
