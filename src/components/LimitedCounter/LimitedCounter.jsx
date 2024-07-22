import { useState } from 'react';

export const LimitedCounter = () => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(false);

  function decrementCounter() {
    if (counter <= 0) return;
    setCounter(counter - 1);
    if (counter === 10) {
      setMessage(false);
    }
  }
  function incrementCounter() {
    if (counter < 10) {
      setCounter(counter + 1);
      setMessage(false);
    }
    if (counter === 9) {
      setMessage(true);
    }
  }

  return (
    <div className="card">
      <h1 className="title2">LimitedCounter</h1>
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
        {message ? (
          <div className="text">Limit is 10.</div>
        ) : (
          <div className="text"></div>
        )}
      </div>
    </div>
  );
};
