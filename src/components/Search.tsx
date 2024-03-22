import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search(props: {path: string}) {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Push the search text to the URL query parameter
    navigate(`/${props.path}?search=${searchText}`);
  };

  return (
    <form className='nafn grid-container'>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Leita</button>
    </form>
  );
}