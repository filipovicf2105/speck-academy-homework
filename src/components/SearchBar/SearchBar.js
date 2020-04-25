import React from 'react';

import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <input
            className="searchBar"
            type="text"
            onChange={(e) => props.onChange(e)}
            placeholder={props.placeholder}
            disabled={props.disabled}
        />
    );
}

export default SearchBar;
