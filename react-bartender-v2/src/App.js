import { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import HeroImage from './components/HeroImage/HeroImage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
            <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
