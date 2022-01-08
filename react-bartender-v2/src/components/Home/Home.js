import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import SearchBar from '../SearchBar/SearchBar';
const Home = ({setSearch}) => {
    return(
        <div style={{
            height: '100vh'
        }}>
        <HeroImage/>
        <SearchBar setSearch={setSearch}/>
        </div>

    );
};
export default Home;