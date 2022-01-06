import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import HeroImage from './components/HeroImage/HeroImage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleDrink from './components/SingleDrink/SingleDrink';
function App() {
  // const Context = createContext('');
  const [search, setSearch] = useState([]);
  const [singleDrink, setSingleDrink] = useState({});
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home setSearch={setSearch}/>} />
      <Route path="/search/:drinkid" element={<Grid search={search} setSingleDrink={setSingleDrink}/>} />
      <Route path='/drink/:drinkid' element={<SingleDrink singleDrink={singleDrink} />} />

      </Routes>

    </div>
  );
}

export default App;
