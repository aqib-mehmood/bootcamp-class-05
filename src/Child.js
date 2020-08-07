import React, { useContext } from 'react';
import DemoContext from './DemoContext';

function Child() {
    let childval = useContext(DemoContext);
  return (
  <h1>Child Number is = {childval}</h1>
    
  );
}

export default Child;
