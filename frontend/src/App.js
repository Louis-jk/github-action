import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get('/names');
    setUserName(response.data);

    console.log(response);
  };

  return (
    <>
      <h1>My frontend</h1>
      <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
