import React from 'react';
import Node from '../../images/node.png';
import Git from '../../images/git.jpeg';

import './stack.css';

const Stacks = () => {
  return (
    <div className='stack-wrapper py-1'>
      <div className='row my-2'>
        <div className='col-md-8 offset-md-2'>
          <div className='row'>
            <div className='text-center fs-2 mb-3 stack-hdr'> Technologies we use </div>
            
            <div class="row-fluid d-flex flex-wrap">
                <div class="span2 offset1">
                  <div className='card-s d-flex justify-content-center' style={{ marginLeft: '10px'}}>
                    <img src={Node} alt='Node JS' />
                  </div>
                </div>
                <div class="span2">
                  <div className='card-s d-flex justify-content-center'>
                    <img src={Git} alt='Github' />
                  </div>
                </div>
                <div class="span2">
                  <div className='card-s d-flex justify-content-center'>
                      <img src={Node} alt='Node JS' />
                  </div>
                </div>
                <div class="span2">
                  <div className='card-s d-flex justify-content-center'>
                    <img src={Node} alt='Node JS' />
                  </div>
                </div>
                <div class="span2">
                  <div className='card-s d-flex justify-content-center'>
                    <img src={Node} alt='Node JS' />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stacks;