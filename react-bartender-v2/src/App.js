import './App.css';
import Grid from './components/Grid/Grid';
import HeroImage from './components/HeroImage/HeroImage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <HeroImage />
      <SearchBar/> */}
      <Grid/>
    </div>
  );
}

export default App;
