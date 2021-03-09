import React from 'react';
import './search-box.styles.scss';

export const SearchBox = ({placeholder, handleChange, value}) => (
    <input
        className='search'
        value={value}
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
    />
    // </div>
)