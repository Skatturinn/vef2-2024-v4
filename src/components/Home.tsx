import { sluggy } from "../lib/utils"
import Search from "./Search"
import SpaceList from "./SpaceList"
import { routes } from "./types"

// efni og lista af geimskot.
function Preview(props:
	{
		preview:
		Array<{ path: string, name: string, offset?: number, href: string }>
	}
) {
	return <>
		<ul className="results">
			{props.preview.map(stak =>
				<li>
					<h2>{stak.name}</h2>
					<SpaceList path={stak.path} searchParams={{ limit: 3, offset: stak.offset || 0 }} />
					<a href={'/' + stak.href}>Skoða fleiri...</a>
				</li>)}
		</ul></>

}


export default function Home(props: { routes: routes }) {
	const href = props.routes.map(stak => {
		return {
			path: stak.path || '',
			name: stak.name.toUpperCase()[0] + stak.name.slice(1) + ' geimskot',
			offset: 5, href: stak.slug || 'test'
		}
	})
	return <>
		<div className='rows'>
			<Search path={sluggy('öll')} />
			<div>
				<h2 className="heading nafn">Geimskotaleitin vef2</h2>
				<p>Þessi síða inniheldur vef2 útfærslu af Verkefni 9: Geimskotaleitin, úr vefforitun 1.
					Hún notast við sama API en inniheldur þrjá flokka og leitar möguleika með síðu virkni.
					Hægt er að sjá vefforitun 1 útfærsluna hér:
				</p>
				<a href="https://inquisitive-pavlova-80772f.netlify.app/">Geimskotaleitin</a>
			</div>
			<Preview preview={href} />
		</div>
	</>
};