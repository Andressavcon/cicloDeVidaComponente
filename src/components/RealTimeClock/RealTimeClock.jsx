import { useEffect, useState } from 'react';

export const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const timeOut = setTimeout(updateTime, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="card">
      <h1 className="title2">RealTimeClock</h1>
      <div className="content">
        <h2>{`${hours}:${minutes}:${seconds}`}</h2>
      </div>
    </div>
  );
};
