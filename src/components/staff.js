import React from 'react';

import './staff.css';

const Staff = (props) => {
  return (
        <div className='staff pt-4 m-1'>
            <img src={props.pic} alt='Teammate' />
        </div>
  )
}

export default Staff;