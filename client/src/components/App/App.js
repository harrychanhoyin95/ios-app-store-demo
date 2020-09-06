import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/')
      setData(result.data.appList)
    }

    fetchData()
  }, [])

  console.log('data', data)

  return (
    <div>Home</div>
  );
}

export default App;
