import React from 'react';
import GoogleCalendar from './googleCalendar';import Snow from './googleCalendar/weekView/components/Snow';
function App (props) {
  return (
  <div className="bodycalendar">
    <div className="container">
     { <Snow />}
      <GoogleCalendar />
    </div>
  </div>
  );
}

export default App;


