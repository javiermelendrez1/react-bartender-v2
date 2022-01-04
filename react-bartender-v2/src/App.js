import { useState } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import HeroImage from './components/HeroImage/HeroImage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  //create a home state
  const [home, setHome] = useState(true); //this is state is to know if on the home screen
  return (
    <div className="App">
      <NavBar/>
      {home ? <HeroImage /> : null}
      <SearchBar setHome={setHome}/>
      <Grid/>
    </div>
  );
}

export default App;
