import React from 'react';
import background from './assets/images/background.jpg';

function App() {
  return (
    <div className="App" >
      <div className="flex bg-cover bg-center h-screen w-screen" style={{backgroundImage: `url(${background})`}}>
        <div className="m-auto">
          <h1 className="text-white font-bold" style={{fontFamily: 'Roboto'}}>
            Hello, my name is Zach.
          </h1>
          <h2 className="text-white">
            I design and build software.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
