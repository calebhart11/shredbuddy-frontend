import { createBrowserRouter,createRoutesFromElements, Outlet } from 'react-router-dom';
// import Session from './components/Session';
// import Show from './pages/Show'
// import Index from './pages/Index';
import './App.css';
// import {gapi} from "gapi-script";
import Calendar from "react-calendar"
import { useState } from 'react';

function App() {
  const [date, setDate]= useState(new Date())
  // const calendarID = process.env.REACT_APP_CALENDAR_ID;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;
  return (
  
    
    <div className="App">
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>From:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>to:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    
      <Outlet/>
    </div>
    
  );
}

export default App;
