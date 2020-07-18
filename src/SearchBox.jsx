import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (

        <div className='pa2'>
            <input className='pa3 ba b--green br-pill bg-light-blue'
                type='search'
                placeholder='search friends'
                onChange={searchChange}
                id='Searchbox'
            />
        </div>
    );
}

export default SearchBox;
