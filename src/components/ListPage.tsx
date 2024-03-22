import { sluggy } from "../lib/utils"
import PageSelector from "./PageSelector";
import Search from "./Search";
import SpaceList from "./SpaceList";
import React from "react";


export default function ListPage(props: {name: string, slug?:string}) {
	const slug = props.slug || sluggy(props.name);
	return  <div>
			<Search path={slug}/>
			<SpaceList path={props.name} pageNavigation={true} slug={props.slug}/>
		</div>}
