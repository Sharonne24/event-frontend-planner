import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import EventList from './Components/EventList';
import EventDetails from './Components/EventDetails';
import EventCreationForm from './Components/EventCreationForm';
import EventSignUp from './Components/EventSignUp';
import LoginForm from './Components/LoginForm';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route  path="/events" element = {<EventList/>} />
          <Route  path="/event/create" element = {<EventCreationForm/>} />
          <Route  path="/event/:id" element = {<EventDetails/>} />
          <Route  path="/signup" element ={<EventSignUp/>} />
          <Route  path="/login" element ={<LoginForm />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
