import { sluggy } from "../lib/utils"
import LimitSelector from "./LimitChange";
import Search from "./Search";
import SpaceList from "./SpaceList";


export default function ListPage(props: { name: string, slug?: string }) {
	const slug = props.slug
	return <div>
		<h2>{props.name[0].toLocaleUpperCase() + props.name.slice(1)} geimskot</h2>
		<Search path={sluggy(props.name) || ''} />
		<SpaceList path={slug} pageNavigation={true} slug={sluggy(props.name)} />
		<LimitSelector />
		<a href="/" className="back">Til baka</a>
	</div>
}
