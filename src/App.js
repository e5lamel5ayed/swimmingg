import React, { useEffect, useState } from 'react';
import Home from './Employee/Empolee';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <Home />}
    </div>
  );
}

export default App;
