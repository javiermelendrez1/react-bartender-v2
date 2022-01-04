import './App.css';
import HeroImage from './components/HeroImage/HeroImage';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroImage />
      <SearchBar/>
    </div>
  );
}

export default App;
