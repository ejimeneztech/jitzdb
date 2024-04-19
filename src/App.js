import './App.css';
import React, { useState } from 'react';

import Wrapper from './Components/Wrapper';
import Footer from './Components/Footer';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <>
      <Wrapper>
        <SearchBar onSearch={handleSearch} />
        <Card />
      </Wrapper>
      <Footer />
    </>


  );
}

export default App;
