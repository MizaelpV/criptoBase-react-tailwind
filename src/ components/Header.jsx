import React from 'react';

const Header = () => {
  return (
    <div className='bg-green-300 flex justify-around  font-mono text-purple-500 w-full p-4'>
      <a
        className='hover:underline'
        href='https://docs.coincap.io/?version=latest'
        target='_blank'
        rel='noreferrer'
      >
        CoinCap api
      </a>
      <span>Mizael Paredes Vielma 🚀</span>
    </div>
  );
};

export default Header;
