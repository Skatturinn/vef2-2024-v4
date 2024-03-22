import useFetch from "react-fetch-hook";
import { ApiUrlRequest, LaunchDataList } from "./types";
import PageSelector from "./PageSelector";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const url = process.env.REACT_APP_PUBLIC_API_BASE_URL

if (!url) {
	throw new Error('vantar PUBLIC_API_BASE_URL' + url)
}

export default function SpaceList(props: 
	ApiUrlRequest = {
		searchParams: {
		},
		path: '',
		pageNavigation: false,
		slug: ''
	} 
	) {
	const [searchParams] = useSearchParams();
	const currentPage = parseInt(String(searchParams.get('page')));
	const {pageNavigation, slug} = props
	const limit = props.searchParams?.limit;
	const offset = props.searchParams?.offset || currentPage > 1 ? (currentPage-1)*(limit || 10) : 0
	const [fetchUrl, setFetchUrl] = useState(() => {
        const url = new URL(`launch/${props.path || ''}${offset ? `?offset=${offset}` : ''}${limit ? `?limit=${limit}` : ''}`, process.env.REACT_APP_PUBLIC_API_BASE_URL);
        return url.href;
    });
    const { isLoading, error, data } = useFetch(fetchUrl);
	useEffect(() => {
        const url = new URL(`launch/${props.path || ''}${offset ? `?offset=${offset}` : ''}${limit ? `?limit=${limit}` : ''}`, process.env.REACT_APP_PUBLIC_API_BASE_URL);
        setFetchUrl(url.href);
    }, [props.path, searchParams, currentPage, props.searchParams, offset, limit]);
	if (isLoading) return <p>Sæki geimskot...</p>;
	if (error) return <p>'Error!'{[process.env.PUBLIC_URL,slug]}</p>;
	if ( typeof data === 'object') {
		const out: Array<React.JSX.Element> = [];
		const ld = JSON.parse(JSON.stringify(data)) as LaunchDataList;
		ld.results.forEach((space,nr)=>
			out.push(<li key={'skot_'+nr}>
				<a href={`/${space.id}`}>
					{String(space.name)}: {space.status && JSON.stringify(space.status.name).replaceAll("\"","")}
					</a></li>)
		)
		return (<div>
			<ul className='grid-container'>{out}</ul>
			{pageNavigation ? 
			<PageSelector count={ld.count} page={currentPage || 1} path={slug || ''} limit={limit || 10} offset={offset || currentPage > 1 ? (currentPage-1)*(limit || 10) : 0}/>
				: ''
		}
		</div>);

	}
	return (<ul className='grid-container'>{'what'}</ul>);
}