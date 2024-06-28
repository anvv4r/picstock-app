import React, { useState, useEffect } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { API_KEY } from '../assets/Key';

function HomePage() {
    const [searchQuery, setSearchQuery] = useState('bali');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (searchQuery !== '') {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${currentPage}&per_page=10`,
                    {
                        headers: {
                            Authorization: `Client-ID ${API_KEY}`,
                        },
                    },
                );
                const data = await response.json();
                setSearchResults(data.results);
                setTotalPages(data.total_pages);
                console.log('Data fetched: ', data);
            }
        };
        fetchData();
    }, [searchQuery, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className='nav'>
                <div>
                    <h1>PicStock App</h1>
                </div>
                <div>
                    <SearchBar setSearchQuery={setSearchQuery} />
                </div>
            </div>

            <div className='container'>
                <SearchResults
                    searchResults={searchResults}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleNextPage={handleNextPage}
                    handlePreviousPage={handlePreviousPage}
                />
            </div>

            <div className='footer'>
                <p>&copy; 2024 PicStock App. All rights reserved.</p>
            </div>
        </>
    );
}

export default HomePage;
