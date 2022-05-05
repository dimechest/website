import React from 'react';

import './heading.css';

const Heading = (props) => (
    <div className={`${props.className} display-6 fw-bold heading d-flex flex-column`}
    >
        {props.children}
    </div>
);


export default Heading;
