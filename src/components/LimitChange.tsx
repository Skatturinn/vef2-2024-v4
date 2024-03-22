import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function LimitSelector() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const currentLimit = parseInt(String(searchParams.get('limit'))) || 10;
	const [limit, setLimit] = useState(currentLimit);

	useEffect(() => {
		setSearchParams((prevSearchParams) => {
			const newSearchParams = new URLSearchParams(prevSearchParams);
			newSearchParams.set('limit', limit.toString());
			return newSearchParams;
		});
	}, [limit, setSearchParams]);

	const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newLimit = event.target && event.target?.value && parseInt(event.target.value);
		setLimit(Number(newLimit) || 10);
		navigate(`?${searchParams.toString()}&limit=${newLimit}`);
	};

	return (
		<div>
			<label htmlFor="limit">Fjöldi:</label>
			<select id="limit" value={limit} onChange={handleLimitChange} className='lselector'>
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={30}>30</option>
			</select>
		</div>
	);
}
