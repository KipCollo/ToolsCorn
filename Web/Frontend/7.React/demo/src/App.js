import React from 'react';
import ClassComponent from './components/classComponent';
import FnComponent from './components/functionComponent';
import NavBar from './components/navbar';

function App() {
  return (
    <div className='bod'>
       <NavBar/>
       <ClassComponent/>
       <FnComponent/>
    </div>
  );
}

export default App;
