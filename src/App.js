
import React, { useState } from 'react';

import Wrapper from './Components/Wrapper';
import Footer from './Components/Footer';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import PlusButton from './Components/PlusButton';




function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClicked, setIsClicked] = useState(false);


  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const handleClick = () => {

    setIsClicked(!isClicked);
    console.log(isClicked);
  }




  return (
    <>
      <Wrapper>
        <SearchBar onSearch={handleSearch} />
        <PlusButton onClick={handleClick} />
        <Card />
      </Wrapper>
      <Footer />
    </>


  );
}

export default App;
