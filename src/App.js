
import React, { useState } from 'react';

import Wrapper from './Components/Wrapper';
import Footer from './Components/Footer';
import Card from './Components/Card';
import SearchBar from './Components/SearchBar';
import PlusButton from './Components/PlusButton';
import Modal from './Components/Modal';




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

const handleClose = () => {
  setIsClicked(!isClicked);
}


  return (
    <>
      <Wrapper>
        <SearchBar onSearch={handleSearch} onStatusChange={isClicked} />
        <PlusButton onClick={handleClick} />
        <Modal isOpen={isClicked} onClose={handleClose}/>
        <Card />
      </Wrapper>
      <Footer />
    </>


  );
}

export default App;
