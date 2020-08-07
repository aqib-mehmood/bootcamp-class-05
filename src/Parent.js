import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
      <div>
          <h1>Parent hello world</h1>
          <Child childnum = {props.number}></Child>
      </div>
    
  );
}

export default Parent;
