import styles from './SearchBar.module.css';
import React, {useState} from 'react';
import Modal from './Modal';

export default function SearchBar(props) {
    const [query, setQuery] = useState('');
    const [openStatus, setOpenStatus] = useState(false);

    const handleChange = (event) => {
        setQuery(event.target.value);
        props.onSearch(event.target.value);
    }

    // const handleClose = () => {

    //     setOpenStatus(!isClicked);
    //   }

      
    return (
        <>
        <input type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}/>
            <Modal isOpen={openStatus}/>
        </>
    )
}