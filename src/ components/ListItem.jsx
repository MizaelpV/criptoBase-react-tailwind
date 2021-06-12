import React from 'react';

const ListItem = ({ data, children }) => {
  return (
    <span className='flex justify-center items-center'>
      {data}
      <span className='text-xs font-extralight ml-2'>{children}</span>
    </span>
  );
};

export default ListItem;
