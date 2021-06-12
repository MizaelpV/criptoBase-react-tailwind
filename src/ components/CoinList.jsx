import React from 'react';
import './CoinList.css';
import ListItem from './ListItem';

const CoinList = ({ coins }) => {
  const fixDollar = (amount) => {
    let integer = `${parseFloat(amount).toFixed(2)} $`;
    return integer;
  };

  const fixPercent = (percent) => {
    let percentFixed = `${parseFloat(percent).toFixed(2)} %`;
    return percentFixed;
  };

  return (
    <div className='wrapper xl:w-9/12 lg:w-full w-screen'>
      <b>Symbol</b>
      <b>Rank</b>
      <b>Name</b>
      <b>Price USD</b>
      <b>Percent 24hrs</b>
      <b>Detalle</b>

      {coins.map((coin) => {
        return (
          <React.Fragment key={coin.id}>
            <img
              className='w-11 my-2 mx-auto'
              src={`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
              alt={coin.name}
            />
            <ListItem data={coin.rank} />
            <ListItem data={coin.name}> {coin.symbol}</ListItem>
            <ListItem data={fixDollar(coin.priceUsd)} />
            <ListItem data={fixPercent(coin.changePercent24Hr)} />
            <button>Ver detalle</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CoinList;
