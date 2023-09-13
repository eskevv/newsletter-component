import React from 'react';

import icon from '../assets/images/icon-list.svg'

const UpdateItem = ({children}) => {
  return (
    <div className="UpdateItem">
      <img src={icon} alt="success"/>
      <span>{children}</span>
    </div>
  );
};

export default UpdateItem;