import React, { useState } from 'react';
import './App.css';
import Child from './Child';
import Parent from './Parent';

function App() {

  let [num, setNum] = useState(21);

  return (
    <div>
        <h1>App hello world</h1>
        <Parent number = {num} > </Parent>
        <button onClick={() => setNum(++num)}>Increase Numbers</button>
    </div>
  );
}

export default App;
