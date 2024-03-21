import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	useParams
} from 'react-router-dom';
import { sluggy } from '../lib/utils';
import SlugLink from './SlugLink';
// import routes from MainRoutePaths
import {HeaderRoutes, routes} from './types';

export default function HeaderRouter(props:HeaderRoutes) {
	return <>
				<header>
				<nav>
					<h1>
						<Link to="/">
							{props.image 
							&& 
							<image href={props.image}/>}
							{props.title}
							</Link>
					</h1>
						{
						props.routes.map((stak,nr) => 
							<menu>{stak.map(ustak => 
								<li key={nr}><SlugLink name={ustak.name} slug={ustak?.slug}/></li>)}</menu>)
						}
					</nav>
				</header>
		</>
	
}