import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleDrink from './components/SingleDrink/SingleDrink';
import Footer from './components/Footer/Footer';
function App() {
  // const Context = createContext('');
  const [search, setSearch] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setSearch={setSearch} />} />
        <Route path="/search/:drinkid" element={<Grid search={search} setSearch={setSearch} />} />
        <Route path='/drink/:drinkid' element={<SingleDrink />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
