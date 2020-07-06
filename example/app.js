import React, { useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useForceUpdate } from '../src/useForceUpdate';

function App() {

  const counter = useRef(0);

  const forceUpdate = useForceUpdate();
  
  const increase = useCallback(() => {
    counter.current++;
    forceUpdate();
  }, []);

  return (
    <>
      <div>counter: {counter.current}</div>
      <div>
        <button onClick={increase}>increase</button>
      </div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
