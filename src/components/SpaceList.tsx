import useFetch from "react-fetch-hook";
import { ApiUrlRequest, LaunchDataList } from "./types";

const url = process.env.REACT_APP_PUBLIC_API_BASE_URL

if (!url) {
	throw new Error('vantar PUBLIC_API_BASE_URL' + url)
}

export default function SpaceList(props: 
	ApiUrlRequest = {
		searchParams: {
			limit: 10,
			offset: 0
		},
		path: '',
	} 
	) {
	const sott = new URL(`launch/${props.path || ''}`, url);
	props.searchParams && Object.keys(
		props.searchParams).forEach(
			(key )=> props.searchParams && sott.searchParams.set(
				String(key),String(props.searchParams[key])
				));
	const { isLoading, error, data} = useFetch(sott.href);
	if (isLoading) return <p>Sæki geimskot...</p>;
	if (error) return <p>'Error!'{process.env.PUBLIC_URL}</p>;
	if ( typeof data === 'object') {
		const out: Array<React.JSX.Element> = [];
		const ld = JSON.parse(JSON.stringify(data)) as LaunchDataList;
		ld.results.forEach((space,nr)=>
			out.push(<li key={'skot_'+nr}>
				<a href={`/${space.id}`}>
					<h3>{space.name}</h3>
					{space.LaunchStatus && <p>{space.LaunchStatus.name}</p>}
					</a></li>)
		)
		return (<ul className='grid-container'>{out}</ul>);

	}
	// const v = 'vantar';
	// const arrayOfLists = Array.from(data.items).map(
	// 	vara => (<li key={vara.id} id={vara.id}
	// 		onClick={OpenProduct} className='voruspjald'>
	// 		<figure>
	// 			<img src={vara.image ? vara.image : ''}
	// 				className='vorumynd'
	// 				alt={'mynd af vöru'}></img>
	// 			<figcaption className='voru-data'>
	// 				<h4 className='heiti'>{vara.title ? vara.title : `titill ${v}`}</h4>
	// 				<p className='flokk'>{vara.category_title ? vara.category_title : `flokk ${v}`}</p>
	// 				<p className='verd'>{vara.price ? formatPrice(vara.price) : `verð ${v}`}</p>
	// 			</figcaption>
	// 		</figure>

	// 	</li >)
	// )
	return (<ul className='grid-container'>{'what'}</ul>);
}