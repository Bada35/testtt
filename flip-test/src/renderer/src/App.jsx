import React, { useState } from 'react';
import MOASS from './assets/이음이.svg';

function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleClick = () => {
    const randomTop = Math.random() * 90;
    const randomLeft = Math.random() * 90;
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <div 
        className="absolute transition-all duration-500 ease-in-out transform hover:scale-110"
        style={{ top: `${position.top}%`, left: `${position.left}%` }}
        onClick={handleClick}
      >
        <img src={MOASS} alt="MOASS character" className="w-16 h-16 cursor-pointer" />
      </div>
      <div className="absolute bottom-4 left-4 text-gray-500">
        <span>Click the character to play!</span>
      </div>
    </div>
  );
}

export default App;
