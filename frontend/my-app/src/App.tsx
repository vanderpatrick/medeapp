import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface ResponseData {
  message: string;
  // add any other properties here
}

function App() {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    axios.get<ResponseData>('http://localhost:8000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {data ? (
        <div>
          <h1>{data.message}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
