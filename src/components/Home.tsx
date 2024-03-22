// Forsíða með einhverjum titli, 

import { sluggy } from "../lib/utils"
import Search from "./Search"
import SpaceList from "./SpaceList"
import { routes } from "./types"

// efni og lista af geimskot.
function Preview(props: 
	{preview: 
		Array<{path: string,name: string, offset?: number, href: string}>
	}
	) {
		return <ul className="results">
			<li>test2</li>
			{props.preview.map(stak => 
				<li>
					<h2>{stak.name}</h2>
					<SpaceList path={stak.path} searchParams={{limit: 5, offset:stak.offset || 0}}/>
					<a href={stak.href}>Skoða meira...</a>
				</li>)}
		</ul>

}


export default function Home(props: {routes: routes}) {
	const href = props.routes.map(stak => stak.name)
	return <>
	<div className='rows'>
		<h2 className="heading nafn">Geimskotaleitin vef2</h2>
		<Search path={sluggy(href[2])}/>
		<Preview preview={[
			{path: 'previous', name: 'Seinustu geimskot', offset: 5, href: sluggy(href[0])},
			{path: 'upcoming', name: 'Næstu geimskot', offset: 5, href: sluggy(href[1])},
			{path: '', name: 'Öll geimskot.', href: sluggy(href[2])}

		]}/>

	</div>
	</>
};