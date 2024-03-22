import { sluggy } from "../lib/utils"
import Search from "./Search";
import SpaceList from "./SpaceList";


export default function ListPage(props: {name: string, slug?:string}) {
	const slug = props.slug || sluggy(props.name);
	return  <div>
			<Search path={slug}/>
			<SpaceList path={props.name} pageNavigation={true} slug={props.slug}/>
		</div>}
