import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function PageSelector(props: {count: number, page: number, path: string, limit: number, offset: number}) {
	let {count, limit, path} = props;
	limit = limit > 0 ? limit : 10;
	const [searchParams] = useSearchParams();
    const currentPage = parseInt(String(searchParams.get('page'))) || props.page; 
	const search = searchParams.get('search'); 
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const offset = page > 1 && page*limit < count ? (page - 1)*limit : props.offset || 0;
	const numberOfPages = Math.floor(count/limit) + (count%limit > 0 ?  1: 0);
	console.log(currentPage,props.page)
	useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

	const PageChange = (newPage: number = page) => {
		navigate(`/${ path || ''}?page=${newPage > 0 ? newPage : 1}${search ? `&search=${search}` : ''}`);
	}
	const numer = [];
	numer.push(page === 1 || offset === 0 ? <p>1</p> : <button onClick={(e) => {PageChange(1)}}>1</button>)

	for (const i of [page-2,page-1,page,page+1,page+2]) {
		if (i > 1 && i < numberOfPages) {
			i !== page ? numer.push(<button onClick={(e) => 
				{PageChange(i)}}>{i}</button>) : numer.push(<p>{i}</p>);
		}
    }

	numer.push(page === numberOfPages ? <p>{numberOfPages}</p> : 
	<button onClick={(e) => {PageChange(numberOfPages)}}>{numberOfPages}</button>)


	return <>
	{(offset > 0 || page > 1) ? <button onClick={(e) => {PageChange(page-1)}}>Fyrri</button> : ''}
	<ol>
		{numer.map((stak,nr)=> <li key={nr}>{stak}</li>)}
	</ol>
	{(offset === count-limit || page === numberOfPages) ? '' : <button onClick={(e) => {setPage(page+1);
	PageChange(page+1)}}>Næst</button>}
	</>
}