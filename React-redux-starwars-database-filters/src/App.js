import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';

// Iniciando o projeto

function App() {
  return (
    <div>
      <Header />
      <h1>Star Wars Planets</h1>
      <Table />
    </div>
  );
}

export default App;
