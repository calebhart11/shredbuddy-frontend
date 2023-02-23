import { createBrowserRouter,createRoutesFromElements, Outlet } from 'react-router-dom';
import Session from './components/Session';
import Show from './pages/Show'
import Index from './pages/Index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
