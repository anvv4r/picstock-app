import React, { useState } from 'react';

function SearchBar({ setSearchQuery }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(inputValue);
    };

    return (
        <div className='search__bar'>
            <form onSubmit={handleSearch}>
                <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Search for Pics...' />
                &nbsp;&nbsp;<button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
