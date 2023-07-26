
# Event Planner Website - Frontend
This is the frontend repository for the Event Planner Website, a web application that allows users
to view, create, edit, and RSVP to events. The frontend is built using React.js and communicates with the backend API to fetch and update event data.

# Getting Started
To run the frontend locally, follow these steps:
- Clone the repository to your local machine.
- Navigate to the project directory: cd event-planner-frontend.
- Install the required dependencies using npm: npm install.
- Start the development server: npm start.
- The frontend should now be running on http://localhost:3000.
# Features
- Event List
The homepage of the application displays a list of events available for users to browse.
Each event card shows the event name, date, location, and description.
Users can click on an event card to view more details about the event.
- Event Details
When a user clicks on an event card, they are taken to the event details page.
The event details page shows more information about the selected event, including its name, date, location, and description.
Users can RSVP to the event by filling out a simple form with their name and email.
- Create Event
Users can create a new event by clicking on the "Create Event" button on the homepage.
The create event form allows users to input the event name, date, location, and description.
After filling out the form, users can click the "Create" button to add the event to the list.
- Edit Event
On the event details page, users have the option to edit the event by clicking the "Edit" button.
The edit event form displays the current event details, allowing users to make changes.
After editing the event details, users can click the "Save" button to update the event.
- Delete Event
On the event details page, users can delete the event by clicking the "Delete" button.
A confirmation prompt will ask users to confirm the deletion before removing the event from the list.
- User Authentication
The application supports user authentication for login and signup.
Users can log in with their email and password to access authenticated features.
New users can sign up by providing their email and password.

# Technologies Used
React.js: Frontend JavaScript library for building user interfaces.
React Router: For handling client-side routing and navigation.
CSS: For styling the frontend components.

# Backend API
The frontend communicates with the backend API to fetch event data and perform CRUD operations. The backend repository can be found at Event Planner Backend.

Contribution
If you want to contribute to the Event Planner Website, please fork the repository and 
create a new branch for your feature or bug fix. Submit a pull request when you're ready, and your changes will be reviewed.

Feedback and Support
If you encounter any issues, have suggestions for improvement, or need support, feel free to create an issue in the repository.
I welcome any feedback.








