import React,{useReducer} from 'react';
import numberReducer from './numberReducer';

function Child2(props) {

    let [state, dispatch] = useReducer(numberReducer, 55);
  return (
      <div>
            <h1>Child 2 Number is = {state}</h1>
            <button onClick={() => { dispatch({input_val: 'INCREMENT'}); }}>Increase Child 2 Number</button>
            <button onClick={() => { dispatch({input_val: 'DECREMENT'}); }}>Decrease Child 2 Number</button>
      </div>
  
  );
}

export default Child2;
