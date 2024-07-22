import { useState } from 'react';

export const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="card">
      <h1 className="title2">ToggleText</h1>
      <div className="content">
        {isVisible ? (
          <div>
            <button onClick={() => setIsVisible(!isVisible)}>
              <i className="fa-solid fa-toggle-on"></i>
            </button>
            <div className="text">
              <p>Text visible</p>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => setIsVisible(!isVisible)}>
              <i className="fa-solid fa-toggle-off"></i>
            </button>
            <div className="text"></div>
          </div>
        )}
      </div>
    </div>
  );
};
