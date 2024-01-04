import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Character from './components/Character';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
        <SearchForm />
    <Routes>
          <Route path="/people/:id" element={<Character/>} />
          <Route path="/planets/:id" element={<Planet/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

