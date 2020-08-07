import React, { useContext } from 'react';
import DemoContext from './DemoContext';

function Child() {

    let childval = useContext(DemoContext);

  return (
      <div>
            <h1>Child Number is = {childval}</h1>
            <button onClick={() => childval[1](childval[0]+1)}>Update value</button>
      </div>
  
  );
}

export default Child;
