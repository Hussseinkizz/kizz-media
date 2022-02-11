import { useState } from 'react';
import * as IoIcons from 'react-icons/io5';

//todo : fix search form submission, parse query to query processor and finally return a list of queries component

const SearchBar = ({ processQuery }) => {
  const [inputState, setInputState] = useState('');

  const onChangeHandler = (e) => {
    e.preventDefault;
    if (e.target.value !== '' || null) {
      setInputState(e.target.value);
    }
  };
  const onSubmitHandler = (e) => {
    // search the given query!
    e.preventDefault;
    console.log(inputState);
  };

  return (
    <form
      className="flex-row justify-content-center align-items-center"
      onSubmit={onSubmitHandler}
      autocomplete="on"
    >
      <input
        type="search"
        name="search-bar"
        id="searchBar"
        // value={inputState}
        className="hero-search-bar color-gray-500 padding-x-2 padding-y-2 border-radius-normal background-gray-100 grow-1"
        placeholder="Search..."
        onChange={onChangeHandler}
      />
      <IoIcons.IoSearch
        className="search-icon iconic-button border-radius-normal color-green-300--hoverable padding-y-1"
        type="submit"
        onClick={onSubmitHandler}
      />
    </form>
  );
};

export default SearchBar;
