import React from 'react';

const Button = (props) => {
  return (
    <button className="btn btn-hdr-outline px-4" type={props.type}>
        {props.children}
    </button>
  )
}

export default Button;