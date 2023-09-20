import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }, []);

  const getNames = () => {
    const response = axios.get('/names');
    console.log(response);
  };

  return <h1>My frontend</h1>;
}

export default App;
