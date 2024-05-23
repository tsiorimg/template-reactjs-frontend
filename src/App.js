import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

  useEffect(() => {
    axios.get(`${API_URL}/api/task`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setTasks(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
      });
  }, [API_URL]);

  return (
    <div>
      <h1>Tasks</h1>
      <p>{tasks}</p>
    </div>
  );
}

export default App;
