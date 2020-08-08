import React from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  return (
      <div>
          <h1>Parent hello world</h1>
          <Child childnum = {props.number}></Child>.
          <Child2></Child2>
      </div>
    
  );
}

export default Parent;
