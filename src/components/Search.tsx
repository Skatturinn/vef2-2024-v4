import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search(props: { path: string }) {
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent the default form submission behavior
		navigate(`/${props.path}?search=${searchText}`);
	};
	return (
		<form className='nafn grid-container' onSubmit={handleSearch}>
			<input
				type="text"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button type="submit" className='search-button'>Leita</button>
		</form>
	);
}