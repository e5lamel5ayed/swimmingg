import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import './App.css';
import Home from './Employee/Empolee';

function App() {
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }, [])
  return (
    <div>
      {loading ?
        <div className="loader">
          <SyncLoader  color={'#fff'} size={20} speedMultiplier={1} margin={4} />
        </div> :
        <Home />
      }    </div>
  );
}

export default App;
