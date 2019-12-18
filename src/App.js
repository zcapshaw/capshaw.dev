import React from 'react';
import background from './assets/images/background.jpg';

function App() {
  return (
    <div className="App" >
      <div  className="flex bg-cover bg-center h-screen w-screen relative" 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${background})`}}>
        <div className="m-auto">
          <h1 className="md:text-5xl text-white font-bold gradient ">
            Hello, my name is Zach.
          </h1>
          <h2 className="text-white font-test">
            I design and build software.
          </h2>      
        </div>     
      </div>
    </div>
  );
}

export default App;

