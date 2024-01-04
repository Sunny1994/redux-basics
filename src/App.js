import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,sign_in } from './actions';

function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged= useSelector(state=>state.isLogged)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <h3>{isLogged ? <h3>Valuable information I shouldn't see</h3> : ''}</h3>

     <button onClick={()=> dispatch(increment(5))}>+</button>
     <button onClick={()=> dispatch(decrement())}>-</button>
     <button onClick={()=> dispatch(sign_in())}>Click Me</button>
     
    </div>
  );
}

export default App;
