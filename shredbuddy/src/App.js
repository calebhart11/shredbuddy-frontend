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
    
      <Outlet/>
    </div>
    
  );
}

export default App;
