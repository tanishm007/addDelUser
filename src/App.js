// App.js
import React, { useState } from 'react';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <h1 style={{alignItems: 'center', textAlign:'center', color: 'blue'}}>Pick Users</h1>
      <ItemList/>
    </div>
  );
}

export default App;
