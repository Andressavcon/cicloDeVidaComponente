import { useEffect, useState } from 'react';

export const TitleUpdater = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `useEffect ${number}`;
  }, [number]);

  function decrementNumber() {
    if (number <= 0) {
      return;
    }
    setNumber(number - 1);
  }
  function incrementNumber() {
    setNumber(number + 1);
  }

  return (
    <div className="card">
      <h1 className="title2">TitleUpdater</h1>
      <div className="content">
        <h1>{number}</h1>
        <div>
          <button onClick={decrementNumber}>
            <i className="fa-solid fa-circle-left"></i>
          </button>
          <button onClick={incrementNumber}>
            <i className="fa-solid fa-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
