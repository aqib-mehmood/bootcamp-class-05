import React from 'react';
import './App.css';
import Parent from './Parent';
import DemoContext from './DemoContext';

function App() {

  //let [num, setNum] = useState(21);

  let val=40;

  return (
    <DemoContext.Provider value={val}>
      <div>
        <h1>App hello world</h1>
        <Parent></Parent>
    </div>
    </DemoContext.Provider>
  );
}

export default App;
