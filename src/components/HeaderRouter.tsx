import SlugLink from './SlugLink';
import { HeaderRoutes } from './types';
import ActiveL from './ActiveL';



export default function HeaderRouter(props: HeaderRoutes) {
	return <>
		<header>
			<nav>
				<h1>
					<ActiveL to="/" key={'homeButton'}>		{props.image
						&&
						<image href={props.image} />}
						{props.title}</ActiveL>
				</h1>
				{
					props.routes.map((stak, nr) =>
						<menu className='Navigation'>{stak.map((ustak, nr2) =>
							<li key={`${nr}000${nr2}`}><SlugLink name={ustak.name} slug={ustak?.slug} /></li>)}</menu>)
				}
			</nav>
		</header>
	</>

}