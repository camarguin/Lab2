import React from 'react';
import './App.css';
import { TestContext } from './Context/testContext';
import ChildComp1 from './ChildComp1';

function App() {
  return (
    <TestContext.Provider value={{
        students : ["JC", "Fernando","Zack"], 
        onSubmit: data => console.log("Function is executed! ", data)
    }}>
      <div className="App">
        <ChildComp1 />
      </div>
    </TestContext.Provider>
  );
}

export default App;
