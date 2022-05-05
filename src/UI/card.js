import React from 'react';

const Card = (props) => {
  return (
    <div className={`d-flex ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Card;