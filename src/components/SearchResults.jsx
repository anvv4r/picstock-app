import React from 'react';

function SearchResults({ searchResults, currentPage, totalPages, handleNextPage, handlePreviousPage }) {
    return (
        <>
            <div className='pic__list'>
                {searchResults.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                    searchResults.map((result) => (
                        <div key={result.id} className='pic__box'>
                            <img src={result.urls.small} alt={result.alt_description} />
                            <div className='pics_details'>
                                <h3>{result.alt_description ? result.alt_description : 'No Description'}</h3>
                                <p>
                                    Photographed by: <a href={`/author/${result.user.username}`}>{result.user.name}</a>
                                </p>
                                <p>Published: {result.created_at}</p>
                                <p>Location: {result.user.location ? result.user.location : 'No record'}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className='pagination'>
                {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}

                {currentPage < totalPages && <button onClick={handleNextPage}>Next</button>}
            </div>
        </>
    );
}

export default SearchResults;
