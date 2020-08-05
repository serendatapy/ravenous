import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import Business from '../Business/Business'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BusinessList />
        {/* <Business /> */}

      </header>
    </div>
  );
}

export default App;
