import { useEffect, useState } from 'react';

export const WindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="card">
      <h1 className="title2">WindowSize</h1>
      <div className="content">
        <h2>Largura atual janela: {size}</h2>
      </div>
    </div>
  );
};
