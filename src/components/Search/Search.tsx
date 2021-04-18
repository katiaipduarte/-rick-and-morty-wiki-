import React, { useState, MouseEvent, useCallback, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import lodash from 'lodash';

import { SearchContainer } from './Search.style';
import ApiProvider from '../../lib/api-provider';
import { useDispatch } from 'react-redux';
import { searchQuery } from '../../store/characters/action';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  const { getCharacters } = ApiProvider();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setLoading(true);
    setQuery(value);
    dispatch(searchQuery(value));
    debounce(value);
  };

  const handleMGBClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    getCharacters(query);
  };

  const handleClearSearch = (): void => {
    setQuery('');
    dispatch(searchQuery(''));

    debounce('');
    setShowClearButton(false);
  };

  const debounce = useCallback(
    lodash.debounce((searchTerm) => {
      getCharacters(searchTerm);
      setShowClearButton(searchTerm !== '');
      setLoading(false);
    }, 500),
    [],
  );

  return (
    <SearchContainer>
      <form>
        <button
          id="search-term-btn"
          aria-label="Click to search"
          onClick={(event: MouseEvent<HTMLButtonElement>) => handleMGBClick(event)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <input
          type="text"
          value={query}
          maxLength={50}
          onChange={(event) => handleChange(event)}
          placeholder="Search by character"
          className={loading ? 'is-loading' : ''}
        />
        <button
          id="clear-search-term-btn"
          aria-label="Click to clear search"
          onClick={() => handleClearSearch()}
          style={{ visibility: showClearButton ? 'initial' : 'hidden' }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </form>
    </SearchContainer>
  );
};

export default Search;
