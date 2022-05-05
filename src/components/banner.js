import React from 'react'

const Banner = (props) => {
  return (
    <div className='col-md-9 pl-0'>
        {props.children}
    </div>
  )
}

export default Banner