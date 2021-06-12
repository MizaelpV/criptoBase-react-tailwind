import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './ components/Header';
import CoinList from './ components/CoinList';

function App() {
  let [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoinsData();
  }, []);

  const getCoinsData = async () => {
    const url = 'https://api.coincap.io/v2/assets/?limit=11';
    const response = await axios.get(url);
    setCoins(response.data.data);
  };

  return (
    <div className='App lg:h-full xl:h-screen'>
      <Header />
      <CoinList coins={coins} />
    </div>
  );
}

export default App;
