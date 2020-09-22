import React from 'react';
import './App.css';
import Table from './Pages/Table';
import StarWarsProvider from './context';
import Header from './Pages/Header';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <Header />
        <h1>Star Wars Planets</h1>
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
