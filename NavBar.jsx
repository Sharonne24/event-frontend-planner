import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
       
        <li>
          <Link to="/events">Event List</Link>
        </li>
        <li>
          <Link to="/event/create">Create Event</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
