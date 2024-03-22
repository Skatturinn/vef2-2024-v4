import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageSelector(props: {count: number, page: number, path: string, limit: number, offset: number}) {
	let {count, limit, path} = props;
	limit = limit > 0 ? limit : 10;
	const [page, setPage] = useState(props.page)
	const navigate = useNavigate();
	const offset = page > 1 && page*limit < count ? (page - 1)*limit : props.offset || 0;
	const numberOfPages = Math.floor(count/limit) + (count%limit > 0 ?  1: 0);

	const PageChange = () => {
		navigate(`/${props.path || ''}?page=${page > 0 ? page : 1}`);
	}
	
	const numer = [];
	numer.push(page === 1 || offset === 0 ? <p>1</p> : <button onClick={(e) => {setPage(1);
		PageChange()}}>1</button>)

	for (let i = page - 2; i <= page + 2; i++) {
		if (i > 1 && i < numberOfPages) {
			i !== page ? numer.push(<button onClick={(e) => 
				{setPage(i);
				PageChange()}}>{i}</button>) : numer.push(<p>{i}</p>);
		}
    }

	numer.push(page === numberOfPages ? <p>page</p> : 
	<button onClick={(e) => {setPage(numberOfPages);
		PageChange()}}>{numberOfPages}</button>)


	return <>
	{(offset > 0 || page > 1) ? <button onClick={(e) => {setPage(page-1);
	PageChange()}}>Fyrri</button> : ''}
	<ol>
		{numer.map(stak=> <li>{stak}</li>)}
	</ol>
	{(offset == count-limit || page == numberOfPages) ? '' : <button onClick={(e) => {setPage(page+1);
	PageChange()}}>Næst</button>}
	</>
}