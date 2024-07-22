import { useEffect, useState } from 'react';

export const PersistentCounter = () => {
  const initialCounter = Number(localStorage.getItem('counter')) || 0;
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    localStorage.setItem('counter', counter);
  }, [counter]);

  function decrementCounter() {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <div className="card">
      <h1 className="title2">PersistentCounter</h1>
      <div className="content">
        <h1>{counter}</h1>
        <div>
          <button onClick={decrementCounter}>
            <i className="fa-solid fa-circle-left"></i>
          </button>
          <button onClick={incrementCounter}>
            <i className="fa-solid fa-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
